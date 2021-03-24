const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/orders", (req, res, next) => {
    const orders = [{
        orderNumber: 11111,
        fromHour: "20:00",
        toHour: "21:00",
        orderOwner: "Hilal",
        reservations: 10,
        day: new Date().toLocaleDateString()
    }, {
        orderNumber: 22222,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString()
    },
    {
        orderNumber: 22222,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString()
    },
    {
        orderNumber: 22222,
        fromHour: "20:00",
        toHour: "22:00",
        orderOwner: "Sapir",
        reservations: 1,
        day: new Date().toLocaleDateString()
    }]
    return res.json(orders)
})


app.listen(5000)


