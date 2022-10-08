const express = require('express');
const { getAllProducts, getOneProduct, AddProduct, DeleteProduct, UpdateProduct } = require('../Controller/products')



const router = express.Router();


// Get All Products
router.get("/products", getAllProducts);



// Get One Product
router.get("/products/:id", getOneProduct);


// Add Product
router.post("/products/", AddProduct);


// Update Product
router.put("/products/:id", UpdateProduct);

// delete Product
router.delete("/products/:id", DeleteProduct);





// export default router;
module.exports = router