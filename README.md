# Abide Ministries

A full stack JavaScript application for people that are interested in checking out Nasung Church and would like to know more about it.

## Why I Built This

Our church currently doesn't have a website, so I created a mockup of it to share information about our church with others.

## Technologies Used

- React.js
- Webpack
- Tailwind
- Node.js
- PostgreSQL
- HTML5
- CSS3
- Heroku
- Express


## Live Demo

Try the application live at [https://student-grade-table.lfz.com](https://student-grade-table.lfz.com)

## Features

- Users can view the location of the church and find the starting times
- Users can view core values and visions of the church
- Users can request more information from the church by sharing their information and question
- User can make a donation to the church
- User can watch past sermons on the website

## Preview

[Home Page](images/landing.gif)

[Sermons](images/sermons.gif)

## Stretch Features

(if website becomes official)
- Plan to add more information for lifegroups and recommended readings
- Plan to expand more on core values and missions
- Plan to update pictures

### System Requirements

- Node.js 10 or higher
- NPM 6 or higher

### Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/jameswu49/Abide-Ministries.git
    cd Abide-Ministries
    ```

2. Install all dependencies with NPM.

    ```shell
    npm install
    "express": "^4.18.2",
    "jsonwebtoken": "^8.5.1",
    "pg": "^8.8.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "react-slick": "^0.29.0",
    "slick-carousel": "^1.8.1"
    ```

3. Import the example database to PostgreSQL.

    ```shell
    npm run db:import --db=abideMinistries database/dump.json
    ```

4. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
