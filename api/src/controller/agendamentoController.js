import { Router } from "express";
import { deletaagendamento, listatodosagendamentos, AgendamentoTestedrive, alteraAgendamento, buscarPorNome } from "../repository/agendamentoRepository.js";
const server = Router();

server.get ('/agendamentos', async (req ,resp) => {
    try{
        const resposta = await listatodosagendamentos();
        resp.send(resposta);
    }   

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})


server.post('/agendartest', async (req,resp) => {
    try{
        const agendI = req.body;
        const agend = await AgendamentoTestedrive(agendI);

        resp.send(agend);

    }
    catch (err){
        resp.status(401).send({
            erro: err.message
        })


    }
})

server.get('/agendamentos/busca', async (req, resp) => {
    try {
        const { nome } = req.query;
        
        const resposta = await buscarPorNome(nome);

        if (resposta.length == 0)
            resp.status(404).send([])
        else
            resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete ('/testedrive/:id',async (req,resp) => {
    try{

        const { id } = req.params;
    
        const resposta = await deletaagendamento(id);
        resp.send(resposta);
    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }

})


server.put ('/alteraagendamento', async (req,resp) => {
    try{
        const {id} = req.params;
        const agend = req.body;
        const resposta = await alteraAgendamento(agend, id)
        resp.send(resposta)

    }

    catch (err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;