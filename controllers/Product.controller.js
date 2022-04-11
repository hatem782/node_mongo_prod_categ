const product = require("../models/Product.model");
const categories = require("../models/Categ.model");

exports.CreateProduct = async (req, res) => {
  try {
    const prd = await product.create({ ...req.body });
    await prd.save();

    const ctg = await categories.findById(req.body.category);
    console.log(ctg);
    ctg.products.push(prd);
    await ctg.save();

    const prds = await product.find();
    return res
      .status(200)
      .json({ msg: "produit a été créé avec succès", data: prds });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "erreur", error: err });
  }
};

exports.GetAllProduct = async (req, res) => {
  try {
    const prds = await product.find().populate("category");
    return res.status(200).send({ data: prds });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.DeleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const prod = await product.findById(id);

    console.log(prod);

    if (!prod) {
      return res.status(302).json({ msg: "le modele n'éxiste pas" });
    }

    await prod.remove();
    const prods = await product.find();

    return res.status(200).send({
      success: true,
      msg: "prod supprimé avec succès",
      data: prods,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

/*
exports.GetAllProduct = async (req, res) => {
  try {
    const arts = await product.find().populate("categprod");

    console.log(arts);
    return res.status(200).send({ data: arts });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.GetOneProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const art = await product.findById(id).populate("categprod");
    let clicks = art.clicks + 1;
    console.log(clicks);
    await art.update({ clicks: clicks });
    return res.status(200).send({ data: art });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.UpdateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const art = await product.findById(id);

    if (!art) {
      return res.status(302).json({ msg: "le modele n'éxiste pas" });
    }

    await art.update({ ...req.body });

    const arts = await product.find().populate("categprod");

    return res.status(200).send({
      success: true,
      msg: "article a été modifié",
      data: arts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.DeleteProduct = async (req, res) => {
  try {
    let id = req.params.id;
    const art = await product.findById(id);

    console.log(art);

    if (!art) {
      return res.status(302).json({ msg: "le modele n'éxiste pas" });
    }

    await art.remove();
    const arts = await product.find().populate("categprod");

    return res.status(200).send({
      success: true,
      msg: "article suprimé avec succes",
      data: arts,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};
*/
