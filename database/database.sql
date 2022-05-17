CREATE DATABASE lista_clientes_db;

USE lista_clientes_db;

CREATE TABLE cliente(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(180),
    last_name VARCHAR(255),
    email VARCHAR(180),
    gender VARCHAR(50),
    image VARCHAR(300)

);

RENAME TABLE cliente to clientes;

DESCRIBE clientes;
