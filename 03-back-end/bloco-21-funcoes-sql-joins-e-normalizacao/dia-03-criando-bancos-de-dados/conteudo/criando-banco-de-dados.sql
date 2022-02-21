CREATE DATABASE IF NOT EXISTS albuns;

USE albuns;

CREATE TABLE artista(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE estilo (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL 
) ENGINE=InnoDB;

CREATE TABLE album(
	id INT PRIMARY KEY AUTO_INCREMENT,
    artist_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    preco DECIMAL(5, 2) NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artista(id),
    FOREIGN KEY (estilo_id) REFERENCES estilo(id)
) ENGINE=InnoDB;
