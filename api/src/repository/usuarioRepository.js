import { con } from "./connection.js";

export async function cadastrarfuncionario(funcc) {
    const comando = ` insert into tb_funcionario (DS_EMAIL, DS_SENHA)
    values (?, ?)`;

    const [resposta] = await con.query(comando,[funcc.email,funcc.senha])
    funcc.id = resposta.insertId;

    return funcc;
}