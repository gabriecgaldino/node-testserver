const express = require('express')
const rotas = express.Router()

const validate = [
  { 'usuario': 'invalido@mail.com', 'senha': '123'},
  { 'usuario': 'invalido1@mail.com', 'senha': '321'}
]

rotas.get('/:user', (req, res)=> {
  const user = req.params.user
  let find = validate.find(i=>i.usuario == user)
  if(!find){
    res.status(404).json(
      {erro: 'Usuário não cadastrado!', busca:user }) 
  } else {
    res.status(200).json(find)
  }
})

module.exports = rotas