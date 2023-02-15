// CommonJS => require
// ESModules => import/export

import http from 'node:http';

// Criar um usuário (name, email, senha)

// GET => Buscar uma recurso do back-end
// POST => Criar uma recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// GET/ users => Buscando usuários do back-end
// POST/ users => Criar um usuário no back-end


// Cabeçalhos (Requisição/ resposta) => Metadados 

// HTTP Status Code

// Respostas de informação (100-199),
// Respostas de sucesso (200-299),
// Redirecionamentos (300-399)
// Erros do cliente (400-499) - Front-end enviou informações incorretas
// Erros do servidor (500-599). - Back-end enviou informações incorretas

const users = []

const server = http.createServer((req, res) => {

    const { method, url } = req

    if (method == 'GET' && url == '/users') {

        //Early return
        return res.
            setHeader('Content-Type', 'application/json') // FORMATOU O JSON PARA VISUALIZAÇÃO
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {

        users.push({
            id: 1,
            name: 'John Doe',
            email: 'john@example.com'
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Not found')
})

server.listen(3333)

//localhost:3333
