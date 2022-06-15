import './index.scss';
import { confirmAlert } from 'react-confirm-alert'
import { deletarAgendamento, listaagendamentos } from '../../api/agendamentoApi'
import { useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify'


export default function Index() {

    const [nome, setNOME] = useState ([])
    const [filtro, setFiltro] = useState ('')

    async function filtrar(){
        const resp = await buscarAgendamentoPorNome(filtro);
        setNOME(resp)
    }

    async function deletaAgendamento (id, nome){

        confirmAlert({
            title: 'removerAgendamento',
            message: `deseja remover o agendamento ${nome}?`,
            buttons: [
                {
                    label:'sim',
                    onClick: async () => {
                        const resposta = await deletarAgendamento (id, nome);
                          if(filtro === ''){
                         carregarTodosAgendamentos();
                      }
                          else
                          filtrar();
                          toast.dark('agendamento removido')
              
                    }

                },
                {
                    label:'nao'
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

            <input type="text" value={filtro} onChange={e => setFiltro(e.target.value)} />
            
            
            <div className='container'>
                
                <div className='conteudo'>

                    

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
                            <td># {item.id}</td>
                            <th>{item.cliente}</th>
                            <td>{item.veiculo}</td>
                            <td>{item.cor}</td>
                            <td>{item.cpf}</td>
                            <td>{item.telefone}</td>
                            <td>{item.atendimento}</td>
                            <td>
                                <img src='/assets/images/icon-editar.svg' alt='editar' />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <img src='/assets/images/icon-remover.svg' alt='remover' onClick={() => deletaAgendamento(item.id, item.nome) } />
                            </td>
                        </tr>

                                )}

                            <tr>
                                <td>#01</td>
                                <th>CLIENTE</th>
                                <td>FIAT</td>
                                <td>AZUL</td>
                                <td>9898976</td>
                                <td>4444444</td>
                                <td>
                                    <img src='/assets/images/icon-editar.svg' alt='editar' />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src='/assets/images/icon-remover.svg' alt='remover' />
                                </td>
                            </tr>
                           
                          
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </main>
    )
}