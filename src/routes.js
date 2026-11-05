const express = require('express')
const router = express.Router()

const usuario = require('./controllers/usuario')
const usoia = require('./controllers/usoia')

// Rotas de usuários
router.post('/usuarios', usuario.cadastrar)
router.get('/usuarios', usuario.listar)
router.put('/usuarios/:id', usuario.atualizar)
router.delete('/usuarios/:id', usuario.excluir)
router.post('/login', usuario.login)

// Rotas de usos de IA
router.post('/usoia', usoia.cadastrar)
router.get('/usoia', usoia.listar)
router.put('/usoia/:id', usoia.atualizar)
router.delete('/usoia/:id', usoia.excluir)

// Resumo por nível de risco
router.get('/usoia/resumo', usoia.resumo)

module.exports = router