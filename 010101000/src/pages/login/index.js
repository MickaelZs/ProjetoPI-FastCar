import './index.scss';

export default function Index(){

    return(
        <div className='pagina-login'>
            <header>
        <img src='/images2/1650664822990.png' alt='' />

    </header>

    <section className='cent'>
        <div className='co'>
            <div className='co-a'>
                <div className='co-b'>
                    <div className='co-c'>
                        <div className='c'>
                            <center>
                            <h1>Registro</h1>
                            </center>

                            <center>
                            <input  type='text' name='search' placeholder=' Nome '/>
                            <div className='cl'>
                           
                            <input type='text' name='search' placeholder=' Sobrenome '/>
                            <input type='text' name='search' placeholder=' Cpf '/>
                            
                            </div>
                            <input type='text' name='search' placeholder=' Telefone '/>
                            <input type='text' name='search' placeholder=' Email '/>
                            <input type='text' name='search' placeholder=' Senha '/>
                            </center>

                            <center>
                            <div className='cm'>
                                <a href='/feed'>
                                <input className='ol' type='button' value='CONTINUAR'/>
                                </a>
                            </div>
                            </center>
                        

                            
                            
                            
                        </div>

                    </div>

                    <div className='co-d'>
                        <img src='/images2/2.png' alt='' width='690'/>

                    </div>

                </div>
                
            </div>
        </div>
   
    </section>
        </div>
    )

}