const express = require('express')
const QuestionController = require('./controllers/QuestionController')//importa a file questionController
const RoomController = require('./controllers/RoomController')//importa a file roomController

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) //criou uma rota para o index.ejs
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)


module.exports = route