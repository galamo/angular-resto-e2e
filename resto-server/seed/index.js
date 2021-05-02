require("dotenv").config()
const createConnection = require("../connection/index");
const orderModel = require("../models/orderSchema");
const restModel = require("../models/restSchema");
createConnection();

setTimeout(() => {
    insertRestaruantsToDB()
    insertOrdersToDB()
}, 1000);


async function insertRestaruantsToDB() {
    try {
        const resultFind = await restModel.find();
        if (resultFind.length) return;
        const result = await restModel.insertMany(getRestData());
        console.log(result)
    } catch (ex) {
        console.log(ex)
    } finally {
        // process.exit(0)
    }
}

async function insertOrdersToDB() {
    try {
        const resultFind = await orderModel.find();
        if (resultFind.length) return;
        const result = await orderModel.insertMany(getOrdersData());
        console.log(result)
    } catch (ex) {
        console.log(ex)
    } finally {
        // process.exit(0)
    }
}

function getRestData() {
    return [{ name: "beach", country: "USA" },
    { name: "Roof", country: "ISR" },
    { name: "Time", country: "BEL" },
    { name: "Center", country: "EGY" },
    { name: "Port", country: "ISR" }, { name: "South", country: "ISR" }
        , { name: "East-Tasty", country: "AFK" }]
}

function getOrdersData() {
    return [{
        orderNumber: 0,
        fromHour: "20:00",
        toHour: "21:00",
        orderOwner: "Hilal",
        reservations: 10,
        day: new Date().toLocaleDateString(),
        isOutside: false,
        
    }, {
        orderNumber: 1,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString(),
        isOutside: true,
    },
    {
        orderNumber: 2,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString(),
        isOutside: true,
    },
    {
        orderNumber: 3,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString(),
        isOutside: false,
    },
    {
        orderNumber: 4,
        fromHour: "10:00",
        toHour: "12:00",
        orderOwner: "Raafa",
        reservations: 12,
        day: new Date().toLocaleDateString(),
        isOutside: true,
    },
    {
        orderNumber: 5,
        fromHour: "10:00",
        toHour: "12:00",
        orderOwner: "Raafa",
        reservations: 12,
        day: new Date().toLocaleDateString(),
        isOutside: true,
    },
    {
        orderNumber: 6,
        fromHour: "10:00",
        toHour: "12:00",
        orderOwner: "Raafa",
        reservations: 12,
        day: new Date().toLocaleDateString(),
        isOutside: true,
    },
    {
        fromHour: "10:00",
        orderNumber: 7,
        toHour: "12:00",
        orderOwner: "Raafa",
        reservations: 12,
        day: new Date().toLocaleDateString(),
        isOutside: true,
    }]
}