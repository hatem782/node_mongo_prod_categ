const categorie = require("../models/Categ.model");

exports.CreateCategorie = async (req, res) => {
  try {
    const ctg = await categorie.create({ ...req.body });
    await ctg.save();

    const ctgs = await categorie.find();
    return res
      .status(200)
      .json({ msg: "categorie a été créé avec succès", data: ctgs });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "erreur", error: err });
  }
};

exports.GetAllCategs = async (req, res) => {
  try {
    const categs = await categorie.find().populate("products");
    return res.status(200).send({ data: categs });
  } catch (error) {
    console.log(error);
    res.status(400).send({ errors: error });
  }
};

exports.DeleteCateg = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const ctg = await categorie.findById(id);

    console.log(ctg);

    if (!ctg) {
      return res.status(302).json({ msg: "le modele n'éxiste pas" });
    }

    await ctg.remove();
    const ctgs = await categorie.find();

    return res.status(200).send({
      success: true,
      msg: "categorie tfasse5 cbn",
      data: ctgs,
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
