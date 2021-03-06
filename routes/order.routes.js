const OrderController = require('../controllers/orders.controller');
const EXT = process.env.EXT+'/orders';  // /api/v1/orders

module.exports = (app) => {
    app.post(EXT, OrderController.createOrder);
    app.get(EXT, OrderController.getAllOrders);
    app.get(EXT+'/:id', OrderController.getOrder);
};