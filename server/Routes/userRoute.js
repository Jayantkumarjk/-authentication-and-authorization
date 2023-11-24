const express = require("express");
const { signup, login } = require("../controllers/userController");
const router = express.Router();
const cors = require("cors");
const verifyToken = require("../middlewares/verifyToken");
const { getUser } = require("../controllers/user-controllers");
router.use(cors());
//router.use(cors({origin:"http://localhost:5173"}));

router.use(express.json());


router.post("/signup", signup);
router.post("/login", login);
router.get("/user",verifyToken,getUser)
//router.get("/user",verifyToken);


module.exports = router;