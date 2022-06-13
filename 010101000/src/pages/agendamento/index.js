import './index.scss';
import { cadastrarAgendamento } from '../../api/agendamentoApi'
import {useState} from 'react'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Index(){
    const [nome, setNome] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [cor, setCor] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [atendimento, setAtendimento] = useState('');

    async function salvarClick(){
        try{
            const r = await cadastrarAgendamento(nome,veiculo,cor,cpf,telefone,atendimento)
            toast('agendamento feito');
        }
        catch (err){
            toast('err.messae');

        }
    }

    return(
        <div className='pagina-agendamento'>
            <ToastContainer/>
            
            <div className='Div-FaixaPreta'>
        <div className='Div-Image-Logo'>
            <img className='Image-Logo' src='/images2/1650664822990.png' alt=''/>
        </div>
    </div>



    <div className='Div-Div-Agendar'>
        <div className='Div-Agendar'>


            <div className='Agendar'>
                <p className='p-titulo'>AGENDAR</p>
            </div>


            <p>
                Nome Completo:
            </p>

            <input type='text' placeholder='nome' value={nome} onChange={e => setNome(e.target.value)}/>


            <div className='div-cor'>

            <p className='p-veiculo'>
                Veículo desejado:
            </p>


            <p>
                Cor:
            </p>

            </div>


            <div className='div-cor'>

            <input className='areav' type='text' placeholder='Veiculo' value={veiculo} onChange={e => setVeiculo(e.target.value)}/>

            <input className='areac' type='text' placeholder='Cor' value={cor} onChange={e => setCor(e.target.value)}/>


            </div>


            <div className='div-cor'>

                <p className='p-veiculo2'>
                    Data:
                </p>
    
    
                <p>
                    Hora:
                </p>
    
                </div>
    
    
                <div className='div-cor'>
    
                <input className='areav' type='date' placeholder='data' value={atendimento} onChange={e => setAtendimento(e.target.value)}/>
    
                <input className='areac' type='time' placeholder='horas' value={atendimento} onChange={e => setAtendimento(e.target.value)}/>
    
    
                </div>



                <div className='div-cor'>

                    <p className='p-veiculo2'>
                        CPF:
                    </p>
        
        
                    <p>
                        Telefone:
                    </p>
        
                    </div>
        
        
                    <div className='div-cor'>
        
                    <input className='areav' type='number'placeholder='0' value={cpf} onChange={e => setCpf(e.target.value)}/>
        
                    <input className='areac' type='number' placeholder='0' value={telefone} onChange={e => setTelefone(e.target.value)}/>
        
        
                    </div>




            <div className='div-botao'>
                <button className='botao' onClick={salvarClick}> AGENDAR</button> 
            </div>


        </div>


        <div className='img'>
            <img className='wi' src='/images2/ilustracao-do-conceito-de-conducao-de-carro_114360-8091.webp' alt=''/>
        </div>


    </div>


<div className='rodape'>

    <div className='div-rodape'>
        <img className='png1' src='/images2/f.svg' alt=''/>
        <img className='png2' src='/images2/i.svg' alt=''/>
        <img className='png' src='/images2/t.svg' alt=''/>

        <p classNameName='p-roda'>
            Telefone para contato: (11) 976073105
        </p>

        <p className='p-roda2'>
            Email para contato: FastCar@gmail.com
        </p>

    </div>
</div>
        </div>
    )

}