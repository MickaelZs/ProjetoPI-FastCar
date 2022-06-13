create database nirvana;

drop database nirvana;

use nirvana;

show databases;

desc nirvana;

create table tb_funcionario(
ID_FUNCIONARIO	int primary key auto_increment,
DS_EMAIL		varchar(200),
DS_SENHA		varchar(200)
);

create table tb_agendamento(
ID_AGENDAMENTO	int primary key auto_increment,
NM_VEICULO	varchar(200),
NM_COR	varchar(200),
DS_CPF	varchar(14),
DS_TELEFONE	varchar(200),
NM_CLIENTE	varchar(200),
DT_ATENDIMENTO	datetime,
);

select *from (tb_funcionario);
select *from (tb_agendamento);