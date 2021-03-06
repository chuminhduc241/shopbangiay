const router = require("express").Router();
const { auth } = require("../middleware/auth");
const { authAdmin } = require("../middleware/authAdmin");
const productCtrl = require("../controllers/productCtrl");
router.get("/getProducts", productCtrl.getAllProduct);
router.post("/createProduct", productCtrl.createProduct);

module.exports = router;
