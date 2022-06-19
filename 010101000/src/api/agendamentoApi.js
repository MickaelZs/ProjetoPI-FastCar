import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarAgendamento(NOME,VEICULO, COR, CPF, TELEFONE, ATENDIMENTO){
    const resposta = await api.post('/agendartest', {
  NOME: NOME,    
  VEICULO: VEICULO,
  COR: COR,
  CPF: CPF,
  TELEFONE: TELEFONE,
  ATENDIMENTO: ATENDIMENTO,
    })
    return resposta.data;
}

export async function listaagendamentos(){
  const resposta = await api.get('/agendamentos');
  return resposta.data;
}

export async function deletarAgendamento(id){
  const resposta = await api.delete(`/testedrive/${id}`);
  return resposta.status;
}

export async function BuscarAgendamentoPorNome(nome){
  const resposta = await api.get(`/agendamentos/busca?nome=${nome}`);
  return resposta.data;
}

export async function buscarPorId(id) {
  const resposta = await api.get(`/agendamentos/${id}`);
  return resposta.data;
}

export async function alterarAgendamento(id, NOME,VEICULO, COR, CPF, TELEFONE, ATENDIMENTO){
  const resposta = await api.put(`/agendamento/${id}`, {
NOME: NOME,    
VEICULO: VEICULO,
COR: COR,
CPF: CPF,
TELEFONE: TELEFONE,
ATENDIMENTO: ATENDIMENTO,
  })
  return resposta.data;
}