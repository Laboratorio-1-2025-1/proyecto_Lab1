const { sql } = require('../config/db');

// Función para obtener todos los clientes
const getAllClients = async () => {
    const result = await sql.query`SELECT * FROM Clientes`;
    return result.recordset;
};

// Función para crear un nuevo cliente
const createClient = async (clientData) => {
    const { name, surname, number, email } = clientData;
    const result = await sql.query`INSERT INTO Clientes (Nombre, Apellido, Telefono, Correo) VALUES (${name}, ${surname}, ${number}, ${email})`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

// Función para obtener un cliente por ID
const getClientById = async (id) => {
    const result = await sql.query`SELECT * FROM Clientes WHERE Id = ${id}`;
    return result.recordset[0];
};

// Función para actualizar un cliente existente
const updateClient = async (id, clientData) => {
    const { name, surname, number, email } = clientData;
    const result = await sql.query`UPDATE Clientes SET Nombre = ${name}, Apellido = ${surname}, Telefono = ${number}, Correo = ${email} WHERE Id = ${id}`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

// Función para eliminar un cliente
const deleteClient = async (id) => {
    const result = await sql.query`DELETE FROM Clientes WHERE Id = ${id}`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

module.exports = {
    getAllClients,
    createClient,
    getClientById,
    updateClient,
    deleteClient
};