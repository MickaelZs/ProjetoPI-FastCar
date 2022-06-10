import { con } from "./connection.js";


export async function AgendamentoTestedrive(agend){
    const comando =
    
    `insert into TB_AGENDAMENTO (ID_AGENDAMENTO, ID_FUNCIONARIO, NM_VEICULO, NM_COR, DS_CPF, DS_TELEFONE, NM_CLIENTE, DT_ATENDIMENTO)
    values (?, ?, ?, ?, ?, ?, ?, ?)`

     const [resposta] = await con.query(comando,[agend.AGENDAMENTO, agend.FUNCIONARIO, agend.VEICULO, agend.COR, agend.CPF, agend.TELEFONE, agend.NOME, agend.ATENDIMENTO ]);
     agend.id = resposta.insertId;
    
     return agend;


    }

    export async function listatodosagendamentos (){
        const comando = 
        `SELECT id_agendamento			id,
        nm_veiculo			nome,
        nm_cor		cor,
        ds_cpf	cpf,
        ds_telefone   telefone,
        nm_cliente    cliente,
        dt_atendimento  atendimento
    FROM tb_agendamento;`
    
    
    const [ linhas ] = await con.query(comando);
    return linhas;
    }

    export async function deletaagendamento (id){
        const comando = 
        `DELETE FROM TB_AGENDAMENTO
        WHERE id_agendamento = ? `;
        const [resposta] = await con.query(comando, [id]);
        return resposta.affectedRows;
    }

    export  async function alteraAgendamento(agend){
        const comando = `UPDATE TB_AGENDAMENTO SELECT
        nm_veiculo			?,
        nm_cor		?,
        ds_cpf	?,
        ds_telefone   ?,
        nm_cliente    ?,
        dt_atendimento  ?,
    WHERE id_agendamento`;
    const [resposta] = await con.query(comando,[agend.veiculo, agend.cor, agend.cpf, agend.telefone, agend.cliente, agend.atendimento,id ])
    return resposta.affectedRows;
    }