import './index.scss';
import { cadastrarAgendamento } from '../../api/agendamentoApi'
import axios  from 'axios'
import {useState} from 'react'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Index(){
    const [NOME, setNOME] = useState('');
    const [VEICULO, setVEICULO] = useState('');
    const [COR, setCOR] = useState('');
    const [CPF, setCPF] = useState('');
    const [TELEFONE, setTELEFONE] = useState('');
    const [ATENDIMENTO, setATENDIMENTO] = useState('');

    async function salvarClick(){
        try{      
            const r = await cadastrarAgendamento(NOME,VEICULO,COR,CPF,TELEFONE,ATENDIMENTO)
            toast.dark('agendamento concluido');
        }
        catch (err){
            toast.error(err.response.data.erro)
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

            <input type='text' placeholder='nome' value={NOME} onChange={e => setNOME(e.target.value)}/>


            <div className='div-cor'>

            <p className='p-veiculo'>
                Veículo desejado:
            </p>


            <p>
                Cor:
            </p>

            </div>


            <div className='div-cor'>

            <input className='areav' type='text' placeholder='Veiculo' value={VEICULO} onChange={e => setVEICULO(e.target.value)}/>

            <input className='areac' type='text' placeholder='Cor' value={COR} onChange={e => setCOR(e.target.value)}/>


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
    
                <input className='areav' type='datetime-local' placeholder='data' value={ATENDIMENTO} onChange={e => setATENDIMENTO(e.target.value)}/>
    
               
    
    
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
        
                    <input className='areav' type='number'placeholder='0' value={CPF} onChange={e => setCPF(e.target.value)}/>
        
                    <input className='areac' type='number' placeholder='0' value={TELEFONE} onChange={e => setTELEFONE(e.target.value)}/>
        
        
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