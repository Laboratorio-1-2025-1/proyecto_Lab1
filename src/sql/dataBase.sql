-- Crear el esquema
CREATE SCHEMA adminexample;
GO

-- Crear las tablas que no tienen claves foráneas primero
CREATE TABLE adminexample.client (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    status CHAR(1) DEFAULT 'a'
);
GO

CREATE TABLE adminexample.role (
    id INT IDENTITY(1,1) PRIMARY KEY,
    description VARCHAR(255),
    status CHAR(1) NOT NULL
);
GO

CREATE TABLE adminexample.shop (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    legalinfo VARCHAR(255) NOT NULL
);
GO

CREATE TABLE adminexample.product (
    id INT IDENTITY(1,1) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    unitprice DECIMAL(10,2) NOT NULL CHECK (unitprice > 0),
    stock INT NOT NULL,
    taxinfo CHAR(1) NOT NULL
);
GO

-- Crear las tablas que tienen claves foráneas
CREATE TABLE adminexample.clientorder (
    id INT IDENTITY(1,1) PRIMARY KEY,
    startdate DATE NOT NULL,
    totalamount DECIMAL(10,2) NOT NULL,
    status CHAR(1) DEFAULT 'a' NOT NULL,
    clientid INT REFERENCES adminexample.client(id)
);
GO

CREATE TABLE adminexample.receipt (
    id INT IDENTITY(1,1) PRIMARY KEY,
    receiptnr INT NOT NULL,
    emitdate DATE NOT NULL,
    totalamount DECIMAL(10,2) NOT NULL,
    clientid INT REFERENCES adminexample.client(id),
    shopid INT REFERENCES adminexample.shop(id),
    status CHAR(1) DEFAULT 'e' NOT NULL
);
GO

CREATE TABLE adminexample.orderdetail (
    id INT IDENTITY(1,1) PRIMARY KEY,
    orderid INT REFERENCES adminexample.clientorder(id),
    productid INT REFERENCES adminexample.product(id),
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price > 0),
    subtotal DECIMAL(10,2) NOT NULL CHECK (subtotal > 0),
    tax DECIMAL(10,2) NOT NULL,
    discount DECIMAL(10,2) NOT NULL
);
GO

CREATE TABLE adminexample.receiptdetail (
    id INT IDENTITY(1,1) PRIMARY KEY,
    receiptid INT REFERENCES adminexample.receipt(id),
    productid INT REFERENCES adminexample.product(id),
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price > 0),
    subtotal DECIMAL(10,2) NOT NULL CHECK (subtotal > 0),
    tax DECIMAL(10,2) NOT NULL,
    discount DECIMAL(10,2) NOT NULL
);
GO

CREATE TABLE adminexample.userapp (
    id INT IDENTITY(1,1) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    roleid INT REFERENCES adminexample.role(id),
    status CHAR(1) NOT NULL,
    creationdate DATE NOT NULL
);
GO

-- Insertar datos de ejemplo
INSERT INTO adminexample.client (name, lastname, mail, phone, address, status) VALUES
('Andreasi', 'Alvarado', 'example@mail.com', '55512353', '1st Venue', 'a'),
('Andreina', 'Valencia', 'example@mail.com', '5551555', '2nd Venue', 'i');

INSERT INTO adminexample.product (name, description, category, unitprice, stock, taxinfo) VALUES
('doritos', 'snack', 'edible', 99.99, 100, 'i');
GO

-- Conceder permisos (si es necesario)
-- GRANT SELECT, INSERT, UPDATE, DELETE ON SCHEMA adminexample TO [tu_usuario];