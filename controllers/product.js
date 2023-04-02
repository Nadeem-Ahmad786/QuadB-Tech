const Product = require('../models/productModel');

exports.read = async (req, res) =>{
    try{
      const product = await Product.find({});
      res.status(200).json({
        success: true,
        product
      })
    }
    catch(err){
      res.status(500).json(err)
    }
}