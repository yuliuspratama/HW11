const express = require('express');
const ControlerTodo = require('../controllers/controlerTodo');
const router = express.Router()

router.get("/todo", ControlerTodo.findAll)
router.get("/todo/:id", ControlerTodo.findOne)
router.post("/todo", ControlerTodo.add)
router.delete("/todo/:id", ControlerTodo.delete)
router.post("/todo/:id", ControlerTodo.update)

module.exports = router