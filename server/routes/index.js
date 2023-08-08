const express = require('express')
const router = express.Router()
const Controller = require("../controllers")
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/', (req, res) => {
    res.send('Hello World!')
})

// Routing CMS
router.post("/register", authentication, Controller.registerAdmin);
router.post("/login", Controller.loginAdmin);

router.get("/posts", authentication, Controller.readPosts);
router.post("/posts", authentication, authorization, Controller.addPost);
router.get("/posts/:id", authentication, Controller.readPostById);
router.put("/posts/:id", authentication, authorization, Controller.editPost);
router.delete("/posts/:id", authentication, authorization, Controller.deletePost);
router.get("/categories", authentication, Controller.readCategories);
router.post("/categories", authentication,  authorization, Controller.addCategory);
router.get("/categories/:id", authentication, Controller.readCategoryById);
router.put("/categories/:id", authentication, authorization, Controller.editCategory);
router.delete("/categories/:id", authentication, authorization, Controller.deleteCategory);

// Routing Client User
router.get("/pub/posts", Controller.readPosts);
router.get("/pub/posts/:id", Controller.readPostById);

module.exports = router