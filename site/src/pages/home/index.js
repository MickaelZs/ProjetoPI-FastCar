import './index.scss';

export default function Index(){

    return (
        <div className='pagina-home'>
        <div className='faixa1'>
                <img className='logo' src='/images/1650664822990.png' alt=''  />
                <div className='botp'>
                <a className='io' href='/feed'>Veículos
                </a>
                <a className='io' href='/login'> Login
                </a>
                </div>
            
        </div>



<div className='slide-f'>

    <div className='img'>
        <img src='/images/foto6.jpg' alt='' width=''/>
    </div>



</div>

<div className='sobre' id= "demo">
    <div className='sp'>
    <h1>Quem somos?</h1>
    <p className="sobp">Somos a Fast Car uma concessionaria <br/>
        onde tem a missao de sempre entender as <br/>
        necessidades de nossos clientes <br/>
        Para atende-los com as melhores <br/>
        soluções em Veiculos. </p>
    </div> 
    <img src='/images/venda-carros-novos_2018-07-13_q98a7885_fabio_tito-g1.webp' alt=''/> 
</div>

<div className='f4'>
    <div className='f4-texto'>
    <h1 className="sobh1">NOSSOS SERVIÇOS </h1>
    </div>
    <div className='ciculo'>
    <div className='od'id= "demo">
        <a href='/login'>
        <img src='/images/cao.png' alt=''/>
        </a>
    </div>
    <div className='od' id= "demo">
        <img src='/images/testedie.png' alt=''/>
    </div>
    <div className='od' id= "demo">
        <img src='/images/hoaio.png' alt=''/>
    </div>
    </div>
    
</div>

<section className='mik1'>
    <div className='container-mik1'>
        <div>
        <h1 className='h1-mik1'>CARROS POPULARES</h1>
        </div>
        <div className='subcontainer-mik1'/>
            <div className='j1' id='bl'>
                <img className='b-im' src='/images/Fiat-Toro-Ultra_1.jpg' width='' alt=''/>
                <center>
                <h1 className='tt'> <span className='lp-p'> FIAT </span> <span className='lp-l'>TORO</span> </h1>
                </center> 
                <center>
                <p>2021 &emsp; 0km</p>
                </center>
                <center>
                <a href='/login'>
                <input className='te' type='button' value='AGENDAR'/>
                </a>
                </center>
                </div>
               
                
                
             
            </div>
            <div className='j1' id='bl'>
                <img className='b-im' src='/images/Novo-Nissan-Kicks-Exclusive-13-source_edited.jpg' width='' alt=''/>
                <center>
                    <h1 className='tt'>NISSAN <span className='lp-m'>KICKS</span> </h1>
                    <p>2021 &emsp; 0km</p>
                    <a href='/login'>
                    <input className='te' type='button' value='AGENDAR'/>
                    </a>
                    </center>
            </div>
            <div className='j1' id='bl'>
                <img className='b-im' src='/images/2023-chevrolet-blazer-front-view.jpg' width='' alt=''/>
                <center>
                    <h1 className='tt'>CHEVROLET <span className='lp-u'>BLAZER</span> </h1>
                    <p> 2021 &emsp;  0 Km </p>
                    <a href='/login'>
                    <input className='te' type='button' value='AGENDAR'/>
                    </a>
                    </center>
                
            </div>
</section>

<section className='mik1'>
    <div className='container-mik1'>
        <p>Depoimentos</p>
        <h1 className='h1-mik1'>O QUE FALAM SOBRE NÓS</h1>
        <div className='subcontainer-mik1'>
            <div className='j1' id='bloco'>
                <img className='bloco-im' src='/images/depoimento.png' width='250px' alt=''/>
                <p className='des-bloco' > 'Você está maluco melhor concessionaria, que já fui atendimento muito bom, os carros são espetaculares.'</p>
            </div>
            <div className='j1' id='bloco'>
                <img className='bloco-im' src='./images/depoimento.png' width='250px' alt=''/>
                <p className='des-bloco' > 'Concessionária  Sensacional  
                    Confiável e Tem os Melhores 
                    Veículos.' </p>
            </div>
            <div className='j1' id='bloco'>
                <img className='bloco-im' src='/images/depoimento.png' width='250px' alt=''/>
                <p className='des-bloco'> 'Sem Palavras para Descrever <br/>
                    Essa Concessionária de Veículos <br/>
                    Muito Bom E Os Melhores <br/>
                    Preço se encontra aqui.'  </p>
            </div>
        </div>
        </div>
</section>

<footer>
    <div className='de'>
        <h1>Fast Car </h1>

        <p> @fastcar
        <p> FastCar@gmail</p>
        <p> @xhfastcar_</p>
        <p> FASTCAR_EMPRESS</p>
        
        </p>
    </div>
    <div className='edes'>
        <h1>REDES SOCIAIS</h1>
        <img src='/images/1650457116315.png' alt='' width='500'/>
    
    </div>

</footer>
        </div>
    )
}