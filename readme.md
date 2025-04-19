# 📌 CRUD de Usuários - API Node.js

Um CRUD simples de usuários feito com **Node.js**, permitindo cadastrar, listar, atualizar e excluir usuários.  
Cada usuário possui **nome, e-mail e imagem**. 🚀

## 📋 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Mysql / PostgreSQL** _(se aplicável)_

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão X ou superior)
- **Banco de dados** (se aplicável, ex: Mysql, PostgreSQL)

### 2️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 3️⃣ Instalar Dependências

```bash
npm install
```

### 4️⃣ Configurar Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto e adicione suas configurações.

### 5️⃣ Rodar o Servidor

```bash
npm start
```

O servidor será iniciado em http://localhost:3000.

### 🛠️ Rotas da API

🔹 Criar Usuário

- POST /users
- Body (JSON):

{
"name": "João Silva",
"email": "joao@email.com",
"image": "url-da-imagem"
}

**🔹 Listar Usuários**
GET /users

**🔹 Buscar Usuário por ID**
GET /users/:id

**🔹 Atualizar Usuário**
PUT /users/:id
Body (JSON): (dados que deseja atualizar)

**🔹 Deletar Usuário**
DELETE /users/:id

### 📌 Próximas Implementações

- ✅ Upload de imagens
- ✅ Melhor estruturação do código
- 🔜 Autenticação com JWT
- ✅ Adiconar campos como : senha, data, telefone e nickname 
- ✅ Criptografia de dados
- ✅ Integração com banco de dado
