const express = require("express")
const axios = require("axios")
const getOrders = require("../controller/ordersController")
const RestModel = require("../models/restSchema")
const OrderModel = require("../models/orderSchema")
const router = express.Router()

router.get("/", async (req, res, next) => {
    const orders = await getOrders();
    res.json(orders)
})

router.post("/", async (req, res, next) => {
    const { owner, reservations, restarant, ...rest } = req.body;
    // PARTIAL NOT WORKING YET
    const restDetails = await RestModel.find({ name: restarant });
    const { _id } = restDetails;
    const order = new OrderModel({ restaruant: _id })
    const orders = await getOrders();
    res.json(orders)
})


module.exports = router;