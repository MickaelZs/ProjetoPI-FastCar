import './index.scss';

export default function Index(){

    return(
        <div className='pagina-agendamento'>
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

            <input type='text'/>


            <div className='div-cor'>

            <p className='p-veiculo'>
                Veículo desejado:
            </p>


            <p>
                Cor:
            </p>

            </div>


            <div className='div-cor'>

            <input className='areav' type='text'/>

            <input className='areac' type='text'/>


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
    
                <input className='areav' type='date'/>
    
                <input className='areac' type='time'/>
    
    
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
        
                    <input className='areav' type='text'/>
        
                    <input className='areac' type='text'/>
        
        
                    </div>




            <div className='div-botao'>
                <a className='botao' href='/tabela'>AGENDAR</a>
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