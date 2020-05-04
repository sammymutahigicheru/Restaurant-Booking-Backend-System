import pool from './pool';

pool.on('connect', () =>{
    console.log('connected to db');
});

/**
 * Create User Table
 * CREATE TABLE user
  (id SERIAL PRIMARY KEY, 
  name VARCHAR(100) UNIQUE NOT NULL, 
  phone VARCHAR(100));
 */
const createUserTable = () => {
    const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY, 
    email VARCHAR(100) UNIQUE NOT NULL, 
    first_name VARCHAR(100) NOT NULL, 
    last_name VARCHAR(100) NOT NULL, 
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    created_on DATE NOT NULL)`;
  
    pool.query(userCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  /**
   * Create Restaurant Table
   */
  const createRestaurantTable = () => {
    const restaurantCreateQuery = `CREATE TABLE IF NOT EXISTS restaurant
      (id SERIAL PRIMARY KEY,
      restaurant_name VARCHAR(100) NOT NULL,
      restaurant_description VARCHAR(400) NOT NULL,
      restaurant_address VARCHAR(100) NOT NULL,
      restaurant_image VARCHAR(300) NOT NULL,
      capacity integer NOT NULL,
      restaurant_dish dish NOT NULL,
      created_on DATE NOT NULL)`;
  
    pool.query(restaurantCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  /**
   * Create Dish Table
   */
  const createDishTable = () => {
    const dishCreateQuery = `CREATE TABLE IF NOT EXISTS dish
      (id SERIAL PRIMARY KEY, 
      restaurant_id INTEGER REFERENCES restaurant(id) ON DELETE CASCADE,
      dish_name VARCHAR(300) NOT NULL, 
      dish_description VARCHAR(300) NOT NULL,
      dish_serve_date DATE NOT NULL,
      dish_price float NOT NULL,
      dish_image VARCHAR(300) NOT NULL,
      status float DEFAULT(1.00),
      created_on DATE NOT NULL)`;
  
    pool.query(dishCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  /**
   * Create Booking Table
   */
  const createBookingTable = () => {
    const bookingCreateQuery = `CREATE TABLE IF NOT EXISTS booking(id SERIAL, 
      dish_id INTEGER REFERENCES dish(id) ON DELETE CASCADE,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      restaurant_id INTEGER REFERENCES restaurant(id) ON DELETE CASCADE,
      dish_serve_date DATE, 
      table_number INTEGER UNIQUE,      
      first_name VARCHAR(100) NOT NULL,
      last_name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      phone VARCHAR(100) NOT NULL,    
      created_on DATE NOT NULL,
      PRIMARY KEY (id, dish_id, user_id))`;
    pool.query(bookingCreateQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  /**
   * Drop User Table
   */
  const dropUserTable = () => {
    const usersDropQuery = 'DROP TABLE IF EXISTS users';
    pool.query(usersDropQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  
  /**
   * Drop Restaurant Table
   */
  const dropRestaurantTable = () => {
    const restaurantDropQuery = 'DROP TABLE IF EXISTS restaurant';
    pool.query(restaurantDropQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  /**
   * Drop Dish Table
   */
  const dropDishTable = () => {
    const dishDropQuery = 'DROP TABLE IF EXISTS dish';
    pool.query(dishDropQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  /**
   * Drop Booking Table
   */
  const dropBookingTable = () => {
    const bookingDropQuery = 'DROP TABLE IF EXISTS booking';
    pool.query(bookingDropQuery)
      .then((res) => {
        console.log(res);
        pool.end();
      })
      .catch((err) => {
        console.log(err);
        pool.end();
      });
  };
  
  
  /**
   * Create All Tables
   */
  const createAllTables = () => {
    createUserTable();
    createRestaurantTable();
    createDishTable();
    createBookingTable();
  };
  
  
  /**
   * Drop All Tables
   */
  const dropAllTables = () => {
    dropUserTable();
    dropRestaurantTable();
    dropDishTable();
    dropBookingTable();
  };
  
  pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
  });
  
  
  export {
    createAllTables,
    dropAllTables,
  };
  
  require('make-runnable');