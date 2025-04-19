const express = require('express');
const { listUsers, addUser, deleteUser, updateUser, listIDUser } = require('../controller/usersController');
const { ErroInput } = require('../middleware/ErrorInput')
const routers = express.Router();


routers.get('/users', listUsers);
routers.get('/users/:id', listIDUser);
routers.post('/users', ErroInput, addUser);
routers.put('/users/:id', ErroInput, updateUser);
routers.delete('users/:id', deleteUser);

module.exports = routers;