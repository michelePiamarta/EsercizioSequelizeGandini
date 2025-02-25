DROP IF EXISTS DATABASE gestionemacchine;

CREATE DATABASE gestionemacchine;

USE DATABASE gestionemacchine;

CREATE TABLE proprietari(
    id smallint primary key auto_increment,
    nome varchar(30) not null,
    cognome varchar(50) not null
);

CREATE TABLE auto(
    id smallint primary key auto_increment,
    fkmodello smallint,
    fkproprietario smallint
);

CREATE TABLE modelliauto(
    id smallint primary key auto_increment,
    nome varchar(50),
    descrizione varchar(200)
);

ALTER TABLE auto ADD CONSTRAINT fkmodelloidmodelli FOREIGN KEY fkmodello REFERENCES modelliauto(id);
ALTER TABLE auto ADD CONSTRAINT fkproprietarioidproprietario FOREIGN KEY fkproprietario REFERENCES proprietari(id);