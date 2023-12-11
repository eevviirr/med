require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./app/routers/authRoute");
const patientsRouter = require("./app/routers/patientsRouter");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/patients", patientsRouter);

const start = async () => {
    // Функция запускающая сервер

    try {
        // Подключение к БД

        await mongoose.connect(process.env.MONGO_URL);
        app.listen(process.env.PORT, () => console.log("server is running"));
    } catch (error) {
        console.log(error);
    }
};
start();
