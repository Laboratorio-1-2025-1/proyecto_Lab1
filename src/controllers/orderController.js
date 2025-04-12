// CRUD operations for orders

let orders = [];
let nextId = 1;

// GET /api/orders - Obtener todas las órdenes
exports.getAllOrders = (req, res) => {
    res.json(orders);
};

// GET /api/orders/:id - Obtener una orden por su ID
exports.getOrderById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const order = orders.find(o => o.id === id);
    if (!order) {
        return res.status(404).json({ message: 'Orden no encontrada' });
    }
    res.json(order);
};

// POST /api/orders - Crear una nueva orden
exports.createOrder = (req, res) => {
    const { clientId, productIds, total } = req.body;
    if (!clientId || !productIds || total == null) {
        return res.status(400).json({ message: 'Cliente, productos y total son requeridos' });
    }
    const newOrder = {
        id: nextId++,
        clientId,
        productIds,
        total
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
};

// PUT /api/orders/:id - Actualizar una orden existente
exports.updateOrder = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { clientId, productIds, total } = req.body;
    const order = orders.find(o => o.id === id);
    if (!order) {
        return res.status(404).json({ message: 'Orden no encontrada' });
    }
    if (clientId !== undefined) order.clientId = clientId;
    if (productIds !== undefined) order.productIds = productIds;
    if (total !== undefined) order.total = total;
    res.json(order);
};

// DELETE /api/orders/:id - Eliminar una orden
exports.deleteOrder = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = orders.findIndex(o => o.id === id);
    if (index === -1) {
        return res.status(404).json({ message: 'Orden no encontrada' });
    }
    const deletedOrder = orders.splice(index, 1);
    res.json({ message: 'Orden eliminada', order: deletedOrder[0] });
};