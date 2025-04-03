const mysql = require('mysql2')
require('dotenv').config();

const connection = mysql.createConnection({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    atwaitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,

});

// CRIANDO CONEXAO

connection.connect((error) => {
    if (error) throw error;
    console.log(`Banco conectado com sucesso!! DATABASE: ${process.env.DB_NAME}`);
});

module.exports = connection;