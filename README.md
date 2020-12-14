<h1 align="center">Restaurant Booking Backend System</h1>
   
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/sammymutahigicheru/Restaurant-Booking-Backend-System" />
    <img src="https://img.shields.io/github/languages/top/sammymutahigicheru/Restaurant-Booking-Backend-System"  />
    <img src="https://img.shields.io/github/issues/sammymutahigicheru/Restaurant-Booking-Backend-System" />
    <img src="https://img.shields.io/github/last-commit/sammymutahigicheru/Restaurant-Booking-Backend-System" >
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/jQuery-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-screencastify-lightgrey" />
    <img src="https://img.shields.io/badge/-json-orange" />
</p>

## Table of Contents (Optional)

- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Prerequisites](#prerequisites)
- [Settings](#settings)
- [License](#license)


## Usage


## Features
   Add to Base URL above

- Use the following Endpoints

    `POST /auth/signup` Create User Account

    `POST /auth/signin` Login A User

    `POST /dishes` Create a trip (Needs admin priviledges)

    `GET /dishes` Get all trips

    `POST /bookings` Book a seat on a restaurant

    `GET /bookings` See all of your bookings

    `DELETE /bookings/:bookingId` Delete A Booking

    `PATCH /dishes/:dishId` Cancel A Dish (Needs admin priviledges)

    `GET /user/seed` Seed users table with users with admin rights

    `POST /admin/signup` An admin can add new admin (Needs admin priviledges)

    `PUT /user/:id/admin` An admin can give a registered user admin right (Needs admin priviledges)

    `PUT /bookings/:bookingId` Update Booking Seat Number

    `POST /restaurants` Add a bus (Needs admin priviledges)

    `GET /restaurants` Get all buses (Needs admin priviledges)

    `GET /dishes/price?price="price"` Filter dishes by price

    `GET /dishes/restaurant?restaurant="restaurantName"` Filter trips by restaurant_name


- A successful response will be

     ```javascript
      { status: 'success', data: {} }
     ```
     or

     ```javascript
      { status: 'success', data: [] }
     ```

  and an unsuccessful response will be

     ```javascript
     { status: 'error', error: '​relevant-error-message' }
     ```

## Prerequisites
- NodeJs and Npm (https://nodejs.org/en/download/)

- PostgreSQL(https://www.postgresql.org/download/)


- ReactJs(https://react-cn.github.io/react/downloads.html)

- Create a .env file at the project root `RestaurantBackendSystem/.env` 

- DBeaver: DBeaver is free and open source universal database tool for developers and database administrators.
  (https://dbeaver.io/download/), this is optional though, you can use any other GUI for postgreSQL.
  
## Contributing
  I would love to hear from anyone that will like to contribute.
  Make sure you have latest NodeJs installed locally.
  If you want set up locally you can follow these steps, you can also use `postman`(https://www.getpostman.com/downloads/) to test. 
  Fork the repository, open terminal in root and do the following on terminal

   ```shell
   $ npm install
   ```
   After Setting up the database, create database tables running the command below, its advisable to run the command more than once and make sure your database is updated with the tables:

   ```shell
   $ npm run create-dev-tables
   ```
   Start server by running:

   ```shell
   $ npm run start
   ```
   Seed Database tables with users(with admin right) by running the command below, its advisable to run it more than once:

   ```shell
   $ npm run seed-user-table
   ```
   or use 

   `GET /user/seed` Endpoint

   Test endpoints by running:
   ```shell
   $ npm run test
   ```
## License
   None for now.

developed with 💕 by Sammy Mutahi
