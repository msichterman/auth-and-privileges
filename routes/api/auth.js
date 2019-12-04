const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

// @route   POST api/auth
// @desc    Authenticate user
// @access  Public
router.post("/", (req, res) => {
  const { username, password } = req.body;

  // Simple Validation
  if (!username || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ username }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              username: user.username,
              role: user.role,
              salary: user.salary
            }
          });
        }
      );
    });
  });
});

// @route   PUT api/auth
// @desc    Update A User's Role & Salary (as an Admin?)
// @access  Private
router.put("/", auth, (req, res) => {
  // TODO: Add checks for roles
  User.findOneAndUpdate(
    { username: req.body.usrname },
    {
      $set: {
        role: req.body.role,
        salary: req.body.salary
      }
    },
    // new option returns updated object
    { new: true, useFindAndModify: false }
  )
    .select("-password")
    .then(user => {
      res.json(user);
    });
});

// @route   GET api/auth/user
// @desc    Get user data
// @access  Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
