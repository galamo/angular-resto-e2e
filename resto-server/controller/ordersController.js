const orderModel = require("../models/orderSchema");

async function getOrders() {
    const result = await orderModel.find({}, { __v: false }).populate("restaurant")
    console.log(result)
    return result;
}

module.exports = getOrders;