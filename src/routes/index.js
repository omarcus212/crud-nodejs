const express = require('express');
const { listUsers, addUser, deleteUser, updateUser, listIDUser } = require('../controller/usersController');
const routers = express.Router();


routers.get('/users', listUsers);
routers.get('/users/:id', listIDUser);
routers.post('/users', addUser);
routers.put('users/:id', updateUser);
routers.delete('users/:id', deleteUser);

module.exports = routers;