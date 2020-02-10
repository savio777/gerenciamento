CREATE DATABASE gerenciamento;

CREATE TABLE usuario(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    senha VARCHAR(40) NOT NULL
);

CREATE TABLE sessao(
    id_sessao INT PRIMARY KEY AUTO_INCREMENT,
    hash_sessao VARCHAR(50) NOT NULL,
    data_sessao DATETIME NOT NULL
);
