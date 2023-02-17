// CommonJS => require
// ESModules => import/export
import http from 'node:http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
// http://localhost:3333/users?userId=1&name=Caio

// Route Parameters: Identificação de recursos
// GET http://localhost:3333/users/1

// Request Body: Envio de informações de um formulário (HTTPS)





const server = http.createServer(async (req, res) => {

    const { method, url } = req


    await json(req, res)

    const route = routes.find(route => {
        return route.method == method && route.path.test(url)
    })

    if(route) {

        const routeParams = req.url.match(route.path)

        console.log(routeParams)

        return route.handler(req, res)
    }

    return res.writeHead(404).end('Not found')
})

server.listen(3333)

//localhost:3333
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
