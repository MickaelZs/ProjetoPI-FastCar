import './index.scss';
import { confirmAlert } from 'react-confirm-alert'
import { BuscarAgendamentoPorNome, deletarAgendamento, listaagendamentos } from '../../api/agendamentoApi'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify'


export default function Index() {

    const [nome, setNOME] = useState ([])
    const [filtro, setFiltro] = useState ('')

    async function filtrar(){
        const resp = await BuscarAgendamentoPorNome(filtro);
        setNOME(resp);
    }

    async function deletaAgendamento (id, nome){

        confirmAlert({
            title: 'Remover Agendamento',
            message: `deseja remover o agendamento ${id}?`,
            buttons: [
                {
                    label:'sim',
                    onClick: async () => {
                        const filtro = await deletarAgendamento (id, nome);
                          if(filtro === ''){
                         carregarTodosAgendamentos();
                      }
                          else
                          filtrar();
                          toast.dark('agendamento removido')
                    }
                },
                {
                    label:'Não'
                }
            ]
        })

        
    }

    async function carregarTodosAgendamentos(){
        const resp = await listaagendamentos();
        console.log(resp);
        setNOME(resp);
    }

    useEffect(() => {
        carregarTodosAgendamentos();
    }, [])

    
    return (
        <main className='page page-consultar'>
            
            
            <div className='container'>
                
                <div className='conteudo'>
                    <div classname='buscaagenda'>
                        <div className='caixa-busca'>
                            <input type="text" placeholder='Buscar agendamento por id' value={filtro} onChange={e => setFiltro(e.target.value)}/>
                            <img src='/assets/images/icon-buscar.svg' alt='buscar' />
                        </div>
                        <div className="Div-Botao-Agendar2">
                            <a className="Botao-agendar" href="/agendamento">AGENDAR</a>
                        </div>
                    </div>

                    

                    <table>
                        <thead>
                            <tr>
                                
                                <th>IDENTIFICAÇÃO</th>
                                <th>CLIENTE</th>
                                <th>VEICULO</th>
                                <th>COR</th>
                                <th>CPF</th>
                                <th>TELEFONE</th>
                                <th>ATENDIMENTO</th>
                            </tr>
                        </thead>
                        <tbody>

                            {nome.map(item =>
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.cliente}</td>
                            <td>{item.veiculo}</td>
                            <td>{item.cor}</td>
                            <td>{item.cpf}</td>
                            <td>{item.telefone}</td>
                            <td>{item.atendimento}</td>
                            <td>
                                <img src='/assets/images/icon-editar.svg' alt='editar' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src='./images/filled-trash.png' alt='remover' onClick={() => deletaAgendamento(item.id, item.nome) } />
                            </td>
                        </tr>

                                )}                  
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </main>
    )
}