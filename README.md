# Abide Ministries

A full stack JavaScript application for people that are interested in checking out Nasung Church and would like to know more about it.

## Why I Built This

I wanted to create an application that allows people to see information of the church and what they believe in.

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

Try the application live at [https://abide-ministries.herokuapp.com/](https://abide-ministries.herokuapp.com/)

## Features

- Users can view the location of the church and find the starting times
- Users can view core values and visions of the church
- Users can request more information from the church by sharing their information and question
- User can make a donation to the church
- User can watch past sermons on the website

## Preview

![Home Page](server/public/images/landing.gif)

![Sermons](server/public/images/sermons.gif)

## Stretch Features

- Plan to create pages for lifegroups and recommended readings
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
    ```

3. Start PostgreSQL

    ```shell
    sudo service postgresql start
    ```

4. Create a local .env file from provided example file

    ```shell
    cp .env.example .env
    ```

5. Update the DATABASE_URL in the .env file. Update 'changeMe' to the name-of-database you wish to create.

    ```shell
    DATABASE_URL=postgres://dev:dev@localhost/changeMe?sslmode=disable
    ```

6. Create a database using the name-of-database set in the .env file.

    ```shell
    createdb name-of-database
    ```

7. Import the example database to PostgreSQL and start the database (http://localhost:8081/).

    ```shell
    npm run db:import
    pgweb --db=abideMinistries
    ```

8. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
