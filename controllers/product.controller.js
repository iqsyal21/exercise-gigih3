const {
  getProductsService,
  createProductService,
  updateProductService,
  deleteProductService,
} = require("../services/product.service");

const getProductController = async (req, res) => {
  try {
    const products = await getProductsService();

    res.status(200).json({
      message: "success get all products",
      data: {
        products,
      },
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const createProductController = async (req, res) => {
  try {
    const { link, img_url, title, category, price } = req.body;
    const newProduct = await createProductService(
      link,
      img_url,
      title,
      category,
      price
    );

    res.status(201).json({
      message: "success add new product",
      data: {
        newProduct,
      },
    });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

const updateProductController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const { link, img_url, title, category, price } = req.body;
    const updateProduct = await updateProductService(
      req.params.id,
      link,
      img_url,
      title,
      category,
      price
    );

    res.status(200).json({
      message: "success update product",
      data: {
        updateProduct,
      },
    });
  } catch (error) {
    res.status(403).json({
      message: error.message,
    });
  }
};

const deleteProductController = async (req, res) => {
  try {
    if (req.params.id.length < 24) throw { message: "id is doesn't match" };

    const deleteProduct = await deleteProductService(req.params.id);

    res.status(200).json({
      message: "success deleted product",
      data: deleteProduct,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProductController,
  createProductController,
  updateProductController,
  deleteProductController,
};
