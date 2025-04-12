const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'sgba2020',
    server: 'localhost\\SQLEXPRESS',
    database: 'MiBaseLocal',
    options: {
        encrypt: false, 
        trustServerCertificate: true // Cambiar según tu entorno
    }
};

const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log('Conexión a SQL Server exitosa');
    } catch (error) {
        console.error('Error al conectar a SQL Server:', error);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
    sql
};
