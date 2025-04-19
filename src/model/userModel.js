const db = require('../db/connection');


const getUsers = () => {

    const rows = new Promise((accept, reject) => {

        db.query('SELECT * FROM users', (err, data) => {
            if (err) {
                reject(err)
                return
            }
            accept(data)
        })
    })

    return rows
}

const getIdUsers = (ID) => {

    const rows = new Promise((accept, reject) => {

        db.query('SELECT * FROM users WHERE id=?', [ID], (err, data) => {
            if (err) {
                reject(err)
                return
            }
            accept(data)
        })
    })

    return rows
}

const addUser = (name, email, nickname, password, birthday, cellphone, image) => {

    const rows = new Promise((accept, reject) => {

        db.query('INSERT INTO users (name, email, nickname, password, birthday, cellphone, image) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, email, nickname, password, birthday, cellphone, image],
            (err, data) => {
                if (err) {
                    reject(err)
                }

                accept(data)
            })
    })

    return rows
}

const updateUser = (ID, name, email, nickname, password, birthday, cellphone, image) => {

    const rows = new Promise((accept, reject) => {

        db.query('UPDATE  users SET name=?, email=?, nickname=?, password=?, birthday=?, cellphone=?, image=? WHERE id = ?;',
            [name, email, nickname, password, birthday, cellphone, image, ID],
            (err, data) => {
                if (err) {
                    reject(err)
                }

                accept(data)
            })
    })

    return rows
}


const deleteUser = (ID) => {
    const rows = new Promise((accept, reject) => {

        db.query('DELETE FROM users WHERE id = ?',
            [ID],
            (err, data) => {
                if (err) {
                    reject(err)
                }

                accept(data)
            })
    })

    return rows
}

module.exports = { getUsers, getIdUsers, addUser, updateUser, deleteUser }
