const userModel = require('../model/userModel');
const { badRequest, sendResponse } = require('../utils/users/badRequest');


const listUsers = async (req, res) => {

    try {
        const users = await userModel.getUsers();

        if (users.length === 0) {

            sendResponse(res, 200, false, "Nenhum usuário encontrado.");
        }

        sendResponse(res, 200, true, "Usuários encontrados!", users);

    } catch (error) {

        sendResponse(res, 500, false, "Erro ao buscar usuários.", error.message);

    }
}

const listIDUser = async (req, res) => {

    const ID = req.params.id

    try {
        const users = await userModel.getIdUsers(ID);

        if (users.length === 0) {

            sendResponse(res, 200, false, "Nenhum usuário encontrado.");
        }

        sendResponse(res, 200, true, "Usuários encontrados!", users);

    } catch (error) {

        sendResponse(res, 500, false, "Erro ao buscar usuários.", error.message);

    }
}

const addUser = async (req, res) => {

    const { name, email, image } = req.body

    if (!name) {
        return badRequest(res, "Campo obrigatorio (NAME) não preenchido");
    }

    if (!email) {
        return badRequest(res, "Campo obrigatorio (EMAIL) não preenchido")
    }

    try {
        const users = await userModel.addUser(name, email, image);

        sendResponse(res, 200, true, "Usuários criado com sucesso!", "ID: " + users.insertId);

    } catch (error) {

        sendResponse(res, 500, false, "Erro ao criar usuários.", error.message);

    }

}

const updateUser = async (req, res) => {

    const ID = req.params
    const { name, email, image } = req.body
    console.log(ID.id)

    if (!name) {
        return badRequest(res, "Campo obrigatorio (NAME) não preenchido");
    }

    if (!email) {
        return badRequest(res, "Campo obrigatorio (EMAIL) não preenchido")
    }

    if (isNaN(ID.id)) {
        return badRequest(res, "ID não é um valor válido");
    }
    try {
        const users = await userModel.updateUser(ID.id, name, email, image);
        console.log(users)

        sendResponse(res, 200, true, "Usuários atualizado com sucesso!", users);

    } catch (error) {

        sendResponse(res, 500, false, "Erro ao atualizar usuários.", error.message);

    }

}

const deleteUser = async (req, res) => {
    const ID = req.params

    try {

        const user = await userModel.deleteUser(ID.id)

        if (user.affectedRows == 1 || user.affectedRows > 1) {

            sendResponse(res, 200, true, "Usuario deletado com sucesso.", user);

        } else if (user.affectedRows == 0) {

            sendResponse(res, 200, false, "Usuario não encontrado / ID inexistente.", user)
        }


    } catch (error) {

        sendResponse(res, 500, false, "Erro ao deletar usuários.", "ID")
    }
}

module.exports = {
    listUsers,
    listIDUser,
    addUser,
    updateUser,
    deleteUser
}   