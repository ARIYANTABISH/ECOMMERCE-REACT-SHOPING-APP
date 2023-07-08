const express = require("express");
const registerController = require("../controller/authController");
const loginController = require("../controller/login"); 
const testController = require("../controller/testController"); 
const serachProduct = require("../controller/serachProduct"); 
const requireSigIn = require("../middleware/authmidleware");   
const router = express.Router();



// registration route
router.post("/register", registerController);


//  login router
router.post("/login", loginController);


// testing Route 
router.get("/search/:keyword", serachProduct);
router.get("/test", requireSigIn, testController);

module.exports = router;
