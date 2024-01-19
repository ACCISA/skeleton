const express = require("express")
const cors = require("cors")
const app = express()

const loginRouter = require("./routes/loginRouter")
const registerRouter = require("./routes/registerRouter")
const cookieParser = require("cookie-parser");

module.exports = function (app) {

    app.use(express.json())
    app.use(cookieParser())

    app.use(
        cors({
            credentials: true,
            origin: "http://localhost:5174"
        })
    )

    app.post("/login", loginRouter)

    app.post("/register", registerRouter)

}

