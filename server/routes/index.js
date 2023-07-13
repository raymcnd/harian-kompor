const express = require('express')
const router = express.Router()
const Controller = require("../controllers")
const authentication = require('../middlewares/authentication')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post("/register", Controller.registerAdmin);
router.post("/login", Controller.loginAdmin);

router.get("/posts", authentication, Controller.readPosts);
router.post("/posts", authentication, Controller.addPost);


module.exports = router