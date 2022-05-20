import './index.scss';

export default function Index(){

    return(
        <div className='pagina-tabela'>
            <main>
        <section className='faixaPreta'>
            <img className='imginicio' src='/images2/1650664822990.png' alt='logo' width='170px'/>
        </section>
        <section className='tabela'>
            <div className='faix00'>
            <div className='faixa0'>
                <p>Agendamento de TesteDrive</p>
            </div>
            <div className='faixa1'>
                <p>Nome</p>
                <p>Veículo</p>
                <p>Horário</p>
                <p>Data</p>
                <p>CPF</p>
                <p>Telefone</p>
            </div>
        </div>
        <div>
            <div className='faixa2'>
                <p>Gabriel</p>
                <p>Fiat Toro</p>
                <p>10:00</p>
                <p>05/05/2022</p>
                <p>000.00</p>
                <p>11999-9999</p>
                </div>
        </div>
        </section>
        <div className='rodape'>

            <div className='div-rodape'>
                <img className='png1' src='/images2/f.svg' alt=''/>
                <img className='png2' src='/images2/i.svg' alt=''/>
                <img className='png' src='/images2/t.svg' alt=''/>

                <p className='p-roda'>
                    Telefone para contato: (11) 976073105
                </p>

                <p className='p-roda2'>
                    Email para contato: FastCar@gmail.com
                </p>

            </div>
        </div>

        </main>

        </div>
    )

}