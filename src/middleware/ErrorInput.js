const { badRequest } = require("../utils/users/bodyRequest");

const ErroInput = (req, res, next) => {

    const { name, email, nickname, password, birthday } = req.body

    if (!name) {
        return badRequest(res, "Campo obrigatorio (NAME) não preenchido");
    }

    if (!email) {
        return badRequest(res, "Campo obrigatorio (EMAIL) não preenchido")
    }

    if (!nickname) {
        return badRequest(res, "Campo obrigatorio (NICKNAME) não preenchido")
    }

    if (!password) {
        return badRequest(res, "Campo obrigatorio (PASSWORD) não preenchido")
    }

    if (!birthday || birthday.length < 10) {
        return badRequest(res, "Campo obrigatorio (BIRTHDAY) não preenchido")
    }

    next()

}

module.exports = {
    ErroInput
}   