const express = require("express");
const {
  CreateProduct,
  GetAllProduct,
  DeleteProduct,
} = require("../controllers/Product.controller");

// express router
const router = express.Router();

router.post("/add", CreateProduct);
router.get("/getAll", GetAllProduct);
router.delete("/delete/:id", DeleteProduct);
// router.get("/getOne/:id", GetOneArticle);
// router.put("/update/:id", protect, UpdateArticle);

//export
module.exports = router;
