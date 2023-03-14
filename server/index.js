require('dotenv/config');
const express = require('express');
const pg = require('pg');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const path = require('path');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
app.use(express.json());

app.post('/sermons', async (req, res, next) => {
  try {
    const KEY = process.env.YOUTUBE_API_KEY;
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${KEY}&channelId=UCPyVwBGuNgaeoqc8Mas5AOw&part=snippet,id&order=date&maxResults=20`);
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.post('/api/newcomer', async (req, res, next) => {
  const { name, email, message } = req.body;
  try {
    if (!name || !email || !message) {
      throw new ClientError(400, 'name, email, and message are required fields');
    }
    const sql = `
    insert into "newcomer" ("name", "email", "message")
    values ($1, $2, $3)
    returning *
  `;
    const params = [name, email, message];

    const result = await db.query(sql, params);
    const [newComer] = result.rows;
    res.status(201).json(newComer);
  } catch (err) {
    next(err);
  }
});

app.get('/api/newcomer', async (req, res, next) => {
  try {
    const sql = `
    select *
      from "newcomer"
  `;
    const result = await db.query(sql);
    const newcomer = result.rows;
    res.json(newcomer);
  } catch (err) {
    next(err);
  }
});

app.get('/api/newcomer/:newcomerId', async (req, res, next) => {
  const newcomerId = Number(req.params.newcomerId);
  try {
    if (!Number.isInteger(newcomerId) || newcomerId < 1) {
      throw new ClientError(400, 'grade must be a positive integer');
    }
    const sql = `
    select *
      from "newcomer"
     where "newcomerId" = $1
  `;
    const params = [newcomerId];
    const result = await db.query(sql, params);
    const [newcomer] = result.rows;
    if (!newcomer) {
      throw new ClientError(404, `cannot find grade with gradeId ${newcomerId}`);
    } else {
      res.json(newcomer);
    }
  } catch (err) {
    next((err));
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
