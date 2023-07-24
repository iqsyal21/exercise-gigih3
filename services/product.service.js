const Product = require("../models/product.model");

const getProductsService = async () => {
  const products = await Product.find();
  if (products.length > 0) {
    return products;
  } else {
    throw {
      message: "products not found",
    };
  }
};

const createProductService = async (link, img_url, title, category, price) => {
  const product = await Product.findOne({ title: title });
  if (product != null) throw { message: "product is already" };

  try {
    const newProduct = new Product({
      link: link,
      img_url: img_url,
      title: title,
      category: category,
      price: price,
    });

    await newProduct.save();
    return newProduct;
  } catch (error) {
    return error.message;
  }
};

const updateProductService = async (id, link, img_url, title, category, price) => {
  const product = await Product.findById(id);
  if (product == null) throw { message: "product not found" };

  try {
    const updateProduct = {
      link: link,
      img_url: img_url,
      title: title,
      category: category,
      price: price,
    };

    await Product.findByIdAndUpdate(id, updateProduct, { new: true });
    return updateProduct;
  } catch (error) {
    return error.message;
  }
};

const deleteProductService = async (id) => {
  const product = await Product.findById(id);
  if (product == null) throw { message: "product not found" };

  try {
    const product = await Product.findByIdAndDelete(id);
    return product;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getProductsService,
  createProductService,
  updateProductService,
  deleteProductService,
};
