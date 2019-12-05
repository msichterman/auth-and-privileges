const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

function isAdmin(req, res, next) {
    const token = req.header("x-auth-token");

    // Check for token
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        User.findById(decoded.id).then(user => {
            if(user.role.toLowerCase() === 'admin'){
                req.user = decoded;
                next();
            } else {
                res.status(400).json({ msg: "User is not authenticated" });
            }
        });
    } catch (e) {
        res.status(400).json({ msg: "Token is not valid" });
    }
}

module.exports = isAdmin;
