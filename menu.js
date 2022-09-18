const mongoose = require('mongoose');

 const menuItems = [
  {
    _itemId : 1,
    itemName : 'Pancakes',
    itemQuantity : 5,
    itemPrice : 6.50,
    inStock: true
  }
]

const MenuSchema = new mongoose.Schema({
  _itemId : Number,
  itemName : String,
  itemQuantity : Number,
  itemPrice : Number,
  inStock: Boolean,
})

const Menu = mongoose.model('Menu', MenuSchema);

let menuList = Menu.insertMany([
 {
    _itemId : 1,
    itemName : 'Pancakes',
    itemQuantity : 5,
    itemPrice : 6.50,
    inStock: true
  },
 ]).then(function(){
     console.log("Data inserted")
 }).catch(function(error){
     console.log(error)
 });

 /*menu.save() will only save 1 item to the database if more items are needed
    must use insertMany method
 */

//
// let menuList = new Menu({
//   {
//   _itemId : 1,
//   itemName : 'Pancakes',
//   itemQuantity : 5,
//   itemPrice : 6.50,
//   inStock: true
// },
// {
//   _itemId : 2,
//   itemName : 'Eggs',
//   itemQuantity : 5,
//   itemPrice : 2.50,
//   inStock: true
// },
// });
//
// menuList.save();



// let menuList = new Menu ({
//   _itemId : 1,
//   itemName : 'Pancakes',
//   itemQuantity : 5,
//   itemPrice : 6.50,
//   inStock: true
// })
// menuList.save();

// menuItems.forEach(item => {
//   if(item.itemQuantity === 0){
//     console.log(item,"Nia")
//     return item.inStock = false
//   }
// })

//first item in array of object called menu
//Now connect menu array to database

// export menu;
module.exports = {
  menuItems,Menu
}
