#Welcome to FLights Service
## project setup 

- clone the project on your local
- Execute `npm intsall` on the same path as of your root directory of the downloaded project

- Create a `.env` file in the root directory and add the following environment variable
 -- `PORT=3000`
 - Inside the `src/config ` folder create a new file `config.json` and then add the following piece of json.
 {
  "development": {
    "username": "<Your user name>",
    "password": "<your db password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
-------------------------------------------------
  -- Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute 
  - `npx sequelize db:migrate`



 

- A flight belongs to an airplane but one airplane can be used in multiple flights

- A city has many airports but one airport belongs to a city

- One airport can have many flights , but a flight belongs to one airport.




----------------- DB Design ---------------

  - Airplane Table => (1 : n) Relationship => FLights Table 
    - id
    - model_number
    - capacity
    - created_At
    - upadted_At 

  - Flights Table
    - id
    - source_airport_id
    - destination_aiprort_id
    - arrival 
    - departure
    - flight number
    - Airport id

  - City Table => (1:n) => Airport Table (relationship)
    - id
    - name
  
  - Airport Table => (1:N) => Flights table
    - id
    - name
    - city_id
    - address


- clone the project on your local
- Execute `npm intsall` on the same path as of your root directory of the downloaded project

- Create a `.env` file in the root directory and add the following environment variable
 -- `PORT=3000`
 - Inside the `src/config ` folder create a new file `config.json` and then add the following piece of json.
 {
  "development": {
    "username": "<Your user name>",
    "password": "<your db password>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


