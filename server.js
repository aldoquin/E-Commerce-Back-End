const express = require('express');
const routes = require('./routes');
// const Sequelize = require ('sequelize');

const sequelize = require('./config/connection')
 
// import sequelize connection
// const sequelize = new Sequelize(
//   process.env.DB_USER,
//   process.env.NAME,
//   process.env.DB_PW,
//   {
//     host : 'vkh7buea61avxg07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     dialect:'mysql',
//     port:3306,
//   }
// )

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});