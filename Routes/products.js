const express = require('express');
const { getAllProducts, getOneProduct, AddProduct, DeleteProduct } = require('../Controller/products')



const router = express.Router();


// Get All Products
router.get("/products", getAllProducts);



// Get One Product
router.get("/products/:id", getOneProduct);


// Add Product
router.post("/products/", AddProduct);


// Add Product
router.delete("/products/:id", DeleteProduct);





// export default router;
module.exports = router