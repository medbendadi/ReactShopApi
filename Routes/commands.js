const express = require('express');
const { getOneCategory, AddCategory, UpdateCategory, DeleteCategory } = require('../Controller/category')
const { getAllCommands, getOneCommand, AddCommand, getCommandProducts, UpdateCommandStatus, UpdateCommandContent, DeleteCommand } = require("../Controller/commands")


const router = express.Router({ mergeParams: true });


// Get All Commands
router.get("/commands", getAllCommands);



// Get One Command
router.get("/commands/:id", getOneCommand);


// Get Command Products list
router.get('/commands/:id/products', getCommandProducts)


// Add Command
router.post("/commands/", AddCommand);


// Update Command Status 
router.put("/commands/:id/status", UpdateCommandStatus)


// Update Product
router.put("/commands/:id", UpdateCommandContent);

// delete Product
router.delete("/commands/:id", DeleteCommand);





// export default router;
module.exports = router