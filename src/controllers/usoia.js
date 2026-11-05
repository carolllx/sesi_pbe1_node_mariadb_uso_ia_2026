const db = require('../db')

// Cadastrar uso de IA
exports.cadastrar = (req, res) => {
    let { usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana } = req.body

    let sql = 'INSERT INTO usoia (usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana) VALUES (?, ?, ?, ?, ?, ?, ?)'

    db.query(sql, [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.status(201).json({
            mensagem: 'Uso de IA cadastrado com sucesso!',
            id: resultado.insertId
        })
    })
}

// Listar usos de IA
exports.listar = (req, res) => {
    let sql = 'SELECT * FROM usoia'

    db.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json(resultado)
    })
}

// Atualizar uso de IA
exports.atualizar = (req, res) => {
    let { id } = req.params
    let { usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana } = req.body

    let sql = 'UPDATE usoia SET usuarioId = ?, sistema = ?, tipo = ?, finalidade = ?, tecnologia = ?, nivelRisco = ?, revisaoHumana = ? WHERE id = ?'

    db.query(sql, [usuarioId, sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana, id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json({ mensagem: 'Uso de IA atualizado com sucesso!' })
    })
}

// Excluir uso de IA
exports.excluir = (req, res) => {
    let { id } = req.params

    let sql = 'DELETE FROM usoia WHERE id = ?'

    db.query(sql, [id], (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json({ mensagem: 'Uso de IA excluído com sucesso!' })
    })
}

// Resumo da quantidade de usos por nível de risco
exports.resumo = (req, res) => {
    let sql = 'SELECT nivelRisco, COUNT(*) AS total FROM usoia GROUP BY nivelRisco'

    db.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json(erro)
        }

        res.json(resultado)
    })
}