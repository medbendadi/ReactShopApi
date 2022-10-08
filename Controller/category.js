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
   const selectedItem = myObject['categories'].filter((prod) => prod.id == id)

   const selectedProducts = myObject['products'].filter((prod) => prod.categoryID == selectedItem[0].id)

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
   res.send(newData);
}

const UpdateCategory = (req, res) => {
   const { id } = req.params
   const { name, color } = req.body


   if (!(name && color)) return res.send("invalid Inputs")

   myObject["categories"].forEach((prod) => {
      if (prod.id == id) {
         prod.name = name
         prod.color = color
      }
   })
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Data updated");
   });
   res.send(newData);

}


const DeleteCategory = (req, res) => {
   const { id } = req.params
   const newList = myObject["categories"].filter((prod) => prod.id != id)
   myObject["categories"] = newList
   var newData = JSON.stringify(myObject, null, 3);
   fs.writeFile('./data/data.json', newData, err => {
      if (err) throw err;

      console.log("Delete product with id: " + id);
   });
   res.send(myObject);
}

module.exports = { getAllCategories, getOneCategory, AddCategory, DeleteCategory, UpdateCategory }