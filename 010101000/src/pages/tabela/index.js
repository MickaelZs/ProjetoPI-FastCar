import './index.scss';


export default function Index() {

    
    return (
        <main className='page page-consultar'>
            
            
            <div className='container'>
                
                <div className='conteudo'>

                    <div className='caixa-busca'>
                        <input type="text" placeholder='Buscar filmes por nome' />
                        <img src='/assets/images/icon-buscar.svg' alt='buscar' />
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
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
                            <tr>
                                <td>#01</td>
                                <td>Harry Potter e a Pedra Filosofal</td>
                                <td>8,0</td>
                                <td>04/01/05</td>
                                <td>Sim</td>
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