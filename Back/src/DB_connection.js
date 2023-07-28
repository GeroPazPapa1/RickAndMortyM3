require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')

// EJERCICIO 03

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,{ logging: false, native: false }
);

// EJERCICIO 05

FavoriteModel(sequelize)
UserModel(sequelize)


// Ejercicio 06

const { User, Favorite } = sequelize.models;
//Relacion muchos a muchos
User.belongsToMany(Favorite,{through:'user_favorite',timestamps:false})
Favorite.belongsToMany(User,{through:'user_favorite',timestamps:false})



module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
