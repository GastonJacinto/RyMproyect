const getCharById = require('../controllers/getCharById')
const {postFav,deleteFav,deleteAll} = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const express = require('express')

const Router = express.Router()

Router.get("/character/:id", getCharById)

Router.get( "/login",login)

Router.post("/fav",postFav)

Router.delete("/fav/removeAll", deleteAll)

Router.delete("/fav/:id",deleteFav)

module.exports = {
  Router
}