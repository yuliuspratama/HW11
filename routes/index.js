const express = require('express');
const routerTodo = require('./routerTodo');
const router = express.Router()

router.use(routerTodo)

module.exports = router