const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

// User Model
const User = require("../../models/User");

// GET ALL USERS
router.get("/", auth, (req, res) => {
  let queryBy = {};
  if (req.user.role === "Production Manager") {
    queryBy.role = "Production Employee";
  } else if (req.user.role === "Sales Manager") {
    queryBy.role = "Sales Employee";
  }
  if (
    req.user.role === "Admin" ||
    req.user.role === "Production Manager" ||
    req.user.role === "Sales Manager"
  ) {
    User.find()
      .where(queryBy)
      .then(users => {
        return res.status(200).json(users);
      })
      .catch(error => {
        return res.status(400).json({ msg: "No Employees to View." });
      });
  } else {
    return res.status(400).json({ msg: "You are not a Manager." });
  }
});

// @route   POST api/users
// @desc    Sign up new user
// @access  Public
// CREATE A NEW USER
router.post("/", (req, res) => {
  const { firstname, lastname, role, salary, username, password } = req.body;

  // Simple Validation
  if (!firstname || !lastname || !username || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ username }).then(user => {
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newUser = new User({
      firstname,
      lastname,
      role,
      salary,
      username,
      password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
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
  });
});

// @route   PUT api/auth
// @desc    Update A User's Role & Salary (as an Admin?)
// @access  Private
// UPDATE
router.put("/", auth, (req, res) => {
  const updatedFields = {};
  if (!req.body.username) {
    return res.status(400).json({ msg: "Must provide username." });
  }
  if (req.body.role) {
    updatedFields.role = req.body.role;
  }
  if (req.body.salary) {
    updatedFields.salary = req.body.salary;
  }
  let queryString = { username: req.body.username };
  if (req.user.role === "Production Manager") {
    queryString.role = "Production Employee";
  } else if (req.user.role === "Sales Manager") {
    queryString.role = "Sales Employee";
  }
  if (
    req.user.role === "Admin" ||
    req.user.role === "Production Manager" ||
    req.user.role === "Sales Manager"
  ) {
    User.findOneAndUpdate(
      queryString,
      {
        $set: updatedFields
      },
      // new option returns updated object
      { new: true, useFindAndModify: false }
    )
      .select("-password")
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res.json({ msg: "Couldn't find user." });
        }
      });
  } else {
    return res.status(400).json({ msg: "Not authorized." });
  }
});

module.exports = router;
