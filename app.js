const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.listen(process.env.PORT || 3000)

app.use(cors())

app.get("/", (req, res) => {
    res.json({
        pao: (Math.floor(Math.random() * 100) + 10),
        pd: (Math.floor(Math.random() * 100) + 10),
        pdless: (Math.floor(Math.random() * 100) + 10),
        dataadj: (Math.floor(Math.random() * 100) + 10),
        datacash: (Math.floor(Math.random() * 100) + 10),
        dwa: (Math.floor(Math.random() * 100) + 10),
        dwaest: (Math.floor(Math.random() * 100) + 10),
        priority: (Math.floor(Math.random() * 100) + 10),
        salary: (Math.floor(Math.random() * 100) + 10),
        pensionsalary: (Math.floor(Math.random() * 100) + 10),
    })
})
