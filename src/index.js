const express = require('express');
const server = express();
const router = require('./routes/index')
const cors = require('cors')

server.use(cors());
server.use(express.json());
server.use('/api', router);

server.listen(3000, () => {
    console.log(`servidor está rodando em http://localhost:3000/api`)
})