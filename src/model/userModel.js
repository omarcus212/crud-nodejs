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

const addUser = (name, email, image) => {

    const rows = new Promise((accept, reject) => {

        db.query('INSERT INTO users (name, email, image) VALUES (?, ?, ?)',
            [name, email, image],
            (err, data) => {
                if (err) {
                    reject(err)
                }

                accept(data)
            })
    })

    return rows
}

const updateUser = (ID, name, email, image) => {

    const rows = new Promise((accept, reject) => {

        db.query('UPDATE  users SET name=?, email=?, image=? WHERE id = ?;',
            [name, email, image, ID],
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
