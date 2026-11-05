# Usos de IA

Projeto desenvolvido para a disciplina de Programação Back-End do curso Técnico em Desenvolvimento de Sistemas do SENAI.

O objetivo é desenvolver uma API REST para gerenciar registros de utilização de Inteligência Artificial em empresas, escolas e outros ambientes, permitindo identificar tecnologias utilizadas, finalidades e níveis de risco.

## Tecnologias utilizadas

- Node.js
- Express
- MariaDB
- MySQL
- Thunder Client

## Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Atualização de usuários
- Exclusão de usuários
- Login de usuários
- Cadastro de usos de IA
- Listagem de usos de IA
- Atualização de usos de IA
- Exclusão de usos de IA
- Resumo da quantidade de usos por nível de risco

## Banco de Dados

O projeto utiliza o banco de dados `usos_ia`, composto pelas tabelas:

- `usuario`
- `usoia`

## Diagrama de Classes

![Diagrama de Classes](docs/diagrama_classes.drawio.png.png)

## Testes da API

Os testes das rotas foram realizados utilizando o Thunder Client.

As imagens dos testes estão disponíveis na pasta `docs`.

## Como executar o projeto

1. Clone o repositório.
2. Instale as dependências:

```bash
npm install# sesi_pbe1_node_mariadb_uso_ia_2026
