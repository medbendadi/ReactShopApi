const fs = require("fs");
const path = require("path");

const jsonPath = path.resolve(__dirname, "../data/data.json");

// Storing the JSON format data in myObject
var data = JSON.parse(fs.readFileSync(jsonPath));
var myObject = data;



const { v4 } = require('uuid')

const getAllCategories = (req, res) => {
   res.json(myObject['categories'])
}


const getOneCategory = (req, res) => {
   const { id } = req.params
   const selectedItem = myObject['categories'].filter((item) => item.id == id)[0]

   res.send(selectedItem)
}

const getCategoryProducts = (req, res) => {
   const { id } = req.params
   const selectedItem = myObject['categories'].filter((item) => item.id == id)

   const selectedProducts = myObject['products'].filter((item) => item.categoryID == selectedItem[0].id)

   res.send(selectedProducts)
}


const AddCategory = (req, res) => {
   const { name, color } = req.body
   if (!(name && color)) return res.send("invalid Inputs")

   const newProd = { id: v4(5).split('-')[0], name, color }
   myObject["categories"].push(newProd);
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("New data added");
   });
   res.send(newProd);
}

const UpdateCategory = (req, res) => {
   const { id } = req.params
   const { name, color } = req.body


   if (!(name && color)) return res.send("invalid Inputs")

   let newCategory = {}

   myObject["categories"].forEach((item) => {
      if (item.id == id) {
         item.name = name
         item.color = color
         newCategory = item
      }
   })
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Data updated");
   });
   res.send(newCategory);

}


const DeleteCategory = (req, res) => {
   const { id } = req.params
   const newList = myObject["categories"].filter((item) => item.id != id)
   myObject["categories"] = newList
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Delete product with id: " + id);
   });
   res.send(myObject['categories']);
}

module.exports = { getAllCategories, getOneCategory, AddCategory, DeleteCategory, UpdateCategory, getCategoryProducts }