create database dadosCliente;
use dadosCliente;
create table listaClientes(
	codigo int auto_increment primary key,
    nome varchar(50) not null,
    telefone varchar(15) not null,
    email varchar(50) not null
    );
create table listaClientes2(
    nome varchar(50) not null,
    telefone varchar(15) not null,
    email varchar(50) not null,
    dataNascimento date not null,
    cep varchar(8) not null,
    cidade varchar(50),
    estado varchar(2),
    logradouro varchar(100),
    bairro varchar(50),
    numero varchar(5)
    );    


#drop database dadosCliente;
select * from listaClientes;
select * from listaClientes2;

    
    



    
    
    
    

