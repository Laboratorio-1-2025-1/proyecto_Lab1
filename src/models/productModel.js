const { sql } = require('../config/db');

// Función para obtener todos los productos
const getAllProducts = async () => {
    const result = await sql.query`SELECT * FROM Productos`;
    return result.recordset;
};

// Función para crear un nuevo producto
const createProduct = async (productData) => {
    const { name, price } = productData;
    const result = await sql.query`INSERT INTO Productos (Nombre, Precio) VALUES (${name}, ${price})`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

// Función para obtener un producto por ID
const getProductById = async (id) => {
    const result = await sql.query`SELECT * FROM Productos WHERE Id = ${id}`;
    return result.recordset[0];
};

// Función para actualizar un producto existente
const updateProduct = async (id, productData) => {
    const { name, price } = productData;
    const result = await sql.query`UPDATE Productos SET Nombre = ${name}, Precio = ${price} WHERE Id = ${id}`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

// Función para eliminar un producto
const deleteProduct = async (id) => {
    const result = await sql.query`DELETE FROM Productos WHERE Id = ${id}`;
    return result.rowsAffected[0]; // Retorna el número de filas afectadas
};

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
};