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