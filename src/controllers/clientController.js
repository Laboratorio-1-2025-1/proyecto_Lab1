// CRUD operations for clients

let clients = [];
let nextId = 1;

// GET /api/clients - Obtener todos los clientes
exports.getAllClients = (req, res) => {
    res.json(clients);
};

// GET /api/clients/:id - Obtener un cliente por su ID
exports.getClientById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const client = clients.find(c => c.id === id);
    if (!client) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(client);
};

// POST /api/clients - Crear un nuevo cliente
exports.createClient = (req, res) => {
    const { name, surname, number, email } = req.body;
    if (!name || !surname || !number || !email) {
        return res.status(400).json({ message: 'Nombre, apellido, telefono y correo electrónico son requeridos' });
    }
    
    const newClient = {
        id: nextId++,
        name,
        surname,
        number,
        email
    };
    clients.push(newClient);
    res.status(201).json(newClient);
};

// PUT /api/clients/:id - Actualizar un cliente existente
exports.updateClient = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, surname, number, email } = req.body;
    const client = clients.find(c => c.id === id);
    if (!client) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    if (name !== undefined) client.name = name;
    if (surname !== undefined) client.surname = surname;
    if (number !== undefined) client.number = number;
    if (email !== undefined) client.email = email;
    res.json(client);
};

// DELETE /api/clients/:id - Eliminar un cliente
exports.deleteClient = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = clients.findIndex(c => c.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    const deletedClient = clients.splice(index, 1);
    res.json({ message: 'Cliente eliminado', client: deletedClient[0] });
};