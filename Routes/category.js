const express = require('express');
const { getAllCategories, getOneCategory, AddCategory, UpdateCategory, DeleteCategory } = require('../Controller/category')



const router = express.Router();


// Get All Categories
router.get("/categories", getAllCategories);



// Get One Category
router.get("/categories/:id", getOneCategory);


// Add Product
router.post("/categories/", AddCategory);


// Update Product
router.put("/categories/:id", UpdateCategory);

// delete Product
router.delete("/categories/:id", DeleteCategory);





// export default router;
module.exports = router