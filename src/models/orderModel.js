const { sql } = require('../config/db');

// Función para obtener todas las órdenes
const getAllOrders = async () => {
    const result = await sql.query`SELECT * FROM Ordenes`;
    return result.recordset;
};

// Función para crear una nueva orden
const createOrder = async (orderData) => {
    const { clientId, productIds, total } = orderData;
    const result = await sql.query`INSERT INTO Ordenes (IdCliente, IdProductos, Total) VALUES (${clientId}, ${productIds}, ${total})`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

// Función para obtener una orden por ID
const getOrderById = async (id) => {
    const result = await sql.query`SELECT * FROM Ordenes WHERE Id = ${id}`;
    return result.recordset[0];
};

// Función para actualizar una orden existente
const updateOrder = async (id, orderData) => {
    const { clientId, productIds, total } = orderData;
    const result = await sql.query`UPDATE Ordenes SET IdCliente = ${clientId}, IdProductos = ${productIds}, Total = ${total} WHERE Id = ${id}`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

// Función para eliminar una orden
const deleteOrder = async (id) => {
    const result = await sql.query`DELETE FROM Ordenes WHERE Id = ${id}`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

module.exports = {
    getAllOrders,
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder
};