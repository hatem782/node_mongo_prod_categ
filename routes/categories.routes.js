const express = require("express");
const {
  CreateCategorie,
  GetAllCategs,
  DeleteCateg,
} = require("../controllers/Categories.controller");

// express router
const router = express.Router();

router.post("/add", CreateCategorie);
router.get("/getAll", GetAllCategs);
router.delete("/delete/:id", DeleteCateg);
// router.get("/getOne/:id", GetOneArticle);
// router.put("/update/:id", protect, UpdateArticle);

//export
module.exports = router;
