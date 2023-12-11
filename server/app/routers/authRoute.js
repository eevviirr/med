const Router = require("express");
const router = new Router();
const authController = require("../controllers/authController");
// const bcrypt = require("bcrypt");
// const User = require("../models/User");

// Роутинг
router.post("/user", authController.login);
// router.post("/create", async (req, res) => {
//     const { login, password } = req.body;
//     const hashPassword = bcrypt.hashSync(password, 10);
//     const user = new User({ login, password: hashPassword });
//     await user.save();
//     return res.status(201).json({ message: "User created" });
// });

module.exports = router;
