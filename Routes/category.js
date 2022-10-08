const express = require('express');
const { getAllCategories, getOneCategory, AddCategory, UpdateCategory, DeleteCategory, getCategoryProducts } = require('../Controller/category')



const router = express.Router();


// Get All Categories
router.get("/categories", getAllCategories);



// Get One Category
router.get("/categories/:id", getOneCategory);


// Get One Category
router.get("/categories/:id/products", getCategoryProducts);


// Add Product
router.post("/categories/", AddCategory);


// Update Product
router.put("/categories/:id", UpdateCategory);

// delete Product
router.delete("/categories/:id", DeleteCategory);





// export default router;
module.exports = router