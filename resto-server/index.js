require("dotenv").config()
const express = require("express")
const cors = require("cors")
const axios = require("axios")
const createConnection = require("./connection/index")
const countriesBseURL = "https://restcountries.eu/rest/v2/all";
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

//Routes
const restRouter = require("./routes/restaurants")
const orderRouter = require("./routes/orders")

const app = express()

app.use(cookieParser())
app.use(cors())
app.use(express.static("public"))

app.use(bodyParser.json())


createConnection();


app.use("/rest", restRouter)
app.use("/orders", orderRouter)

// app.get("/orders", (req, res, next) => {
//     let { from, limit } = req.query;
//     console.log("start", from)
//     console.log("end", from + limit)
//     // "select * from orders LIMIT ${limit} OFFSET ${from} "
//     res.cookie("token_angular", 1234566)
//     const orders = [{
//         orderNumber: 0,
//         fromHour: "20:00",
//         toHour: "21:00",
//         orderOwner: "Hilal",
//         reservations: 10,
//         day: new Date().toLocaleDateString(),
//         isOutside: false,
//     }, {
//         orderNumber: 1,
//         fromHour: "20:00",
//         toHour: "22:00",
//         orderOwner: "Sapir",
//         reservations: 1,
//         day: new Date().toLocaleDateString(),
//         isOutside: true,
//     },
//     {
//         orderNumber: 2,
//         fromHour: "20:00",
//         toHour: "22:00",
//         orderOwner: "Sapir",
//         reservations: 1,
//         day: new Date().toLocaleDateString(),
//         isOutside: true,
//     },
//     {
//         orderNumber: 3,
//         fromHour: "20:00",
//         toHour: "22:00",
//         orderOwner: "Sapir",
//         reservations: 1,
//         day: new Date().toLocaleDateString(),
//         isOutside: false,
//     },
//     {
//         orderNumber: 4,
//         fromHour: "10:00",
//         toHour: "12:00",
//         orderOwner: "Raafa",
//         reservations: 12,
//         day: new Date().toLocaleDateString(),
//         isOutside: true,
//     },
//     {
//         orderNumber: 5,
//         fromHour: "10:00",
//         toHour: "12:00",
//         orderOwner: "Raafa",
//         reservations: 12,
//         day: new Date().toLocaleDateString(),
//         isOutside: true,
//     },
//     {
//         orderNumber: 6,
//         fromHour: "10:00",
//         toHour: "12:00",
//         orderOwner: "Raafa",
//         reservations: 12,
//         day: new Date().toLocaleDateString(),
//         isOutside: true,
//     },
//     {
//         fromHour: "10:00",
//         orderNumber: 7,
//         toHour: "12:00",
//         orderOwner: "Raafa",
//         reservations: 12,
//         day: new Date().toLocaleDateString(),
//         isOutside: true,
//     }]
//     if (limit >= 100) limit = 1;
//     if (!from && !limit) return res.json(orders)
//     return res.json(orders.slice(Number(from), Number(from) + Number(limit)))
// })


app.listen(5000)


