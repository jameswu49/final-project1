require('dotenv/config');
const express = require('express');
const pg = require('pg');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
app.use(express.json());

app.get('/api/member', async (req, res, next) => {
  try {
    const sql = `
    select *
      from "member"
  `;
    const result = await db.query(sql);
    const member = result.rows;
    res.json(member);
  } catch (err) {
    next(err);
  }
});

app.get('/api/member/:memberId', async (req, res, next) => {
  const memberId = Number(req.params.memberId);
  try {
    if (!Number.isInteger(memberId) || memberId < 1) {
      throw new ClientError(400, 'grade must be a positive integer');
    }
    const sql = `
    select *
      from "member"
     where "memberId" = $1
  `;
    const params = [memberId];
    const result = await db.query(sql, params);
    const [member] = result.rows;
    if (!member) {
      throw new ClientError(404, `cannot find grade with memberId ${memberId}`);
    } else {
      res.json(member);
    }
  } catch (err) {
    next((err));
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

app.put('/api/member/:memberId', async (req, res, next) => {
  const memberId = Number(req.params.memberId);
  try {
    if (!Number.isInteger(memberId) || memberId < 1) {
      throw new ClientError(400, 'memberId must be a positive integer');
    }
    const { name, email } = req.body;
    if (!name || !email) {
      throw new ClientError(400, 'name and email, are required fields');
    }
    const sql = `
    update "member"
       set "name" = $1,
           "email" = $2
     where "memberId" = $3
    returning *
  `;
    const params = [name, email, memberId];
    const result = await db.query(sql, params);
    const [updatedMember] = result.rows;
    if (!updatedMember) {
      throw new ClientError(404, `cannot find grade with gradeId ${memberId}`);
    } else {
      res.json(updatedMember);
    }
  } catch (err) {
    next((err));
  }
});

app.delete('/api/member/:memberId', async (req, res, next) => {
  try {
    const memberId = Number(req.params.memberId);
    if (!Number.isInteger(memberId) || memberId < 1) {
      throw new ClientError(400, 'memberId must be a positive integer');
    }
    const sql = `
    delete from "member"
     where "memberId" = $1
    returning *
  `;
    const params = [memberId];
    const result = await db.query(sql, params);
    const [deletedMember] = result.rows;
    if (!deletedMember) {
      throw new ClientError(404, `cannot find grade with gradeId ${memberId}`);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next((err));
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
