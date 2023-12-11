const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateAccessToken = (id) => {
    const payload = {
        id,
    };
    return jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: "24h" });
};

class authController {
    async login(req, res) {
        const { login, password } = req.body;
        const user = await User.findOne({ login });
        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        const validPassword = await bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }
        const token = generateAccessToken(user._id);
        res.json({ token });
    }
}

module.exports = new authController();
