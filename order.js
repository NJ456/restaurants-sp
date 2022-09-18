const Handlebars = require("handlebars");
// controller containing logic for order page
// const template = require('./template/template.hbs')
//rename as order.js
const testItem = [
  {
   _itemId : 1,
   itemName : 'Pancakes',
   itemQuantity : 5,
   itemPrice : 6.50,
   inStock: true
 },
 {
  _itemId : 2,
  itemName : 'Carrot Cake',
  itemQuantity : 5,
  itemPrice : 3.50,
  inStock: true
},
{
 _itemId : 3,
 itemName : 'Eggs & Bacon',
 itemQuantity : 5,
 itemPrice : 7.50,
 inStock: true
},
{
 _itemId : 4,
 itemName : 'Marinated Green Olives',
 itemQuantity : 5,
 itemPrice : 3.50,
 inStock: true
},
{
 _itemId : 5,
 itemName : 'Slow Roasted Tomatoes',
 itemQuantity : 5,
 itemPrice : 3.50,
 inStock: true
},
{
 _itemId : 6,
 itemName : 'Dough Balls',
 itemQuantity : 5,
 itemPrice : 5.50,
 inStock: true
},
{
 _itemId : 7,
 itemName : 'Garlic King Prawns',
 itemQuantity : 5,
 itemPrice : 5.50,
 inStock: true
},
{
 _itemId : 8,
 itemName : 'Lemon & Herb Chicken Wings',
 itemQuantity : 5,
 itemPrice : 6.50,
 inStock: true
}
]
 const template = `<form>
   {{log testItem}}
   <p> Choose your items: </p>
   <div>
   {{#each testItem}}
   <input type="radio" id="menuChoices" name="menuItem" value="item" />
    <label for="menuChoices">{{itemName}}</label>
     <br>
   {{/each}}
   </div>
   <br>
   <div>
    <button type="submit">Submit</button>
  </div>
 </form>`;

console.log(template)

 const tp = Handlebars.compile(template);
 const htmlStr = tp({testItem});
 // {testItem} tells handlebars to use the object testItem
 // console.log(htmlStr);


const menuList = (req,res) => {
  res.send(htmlStr);
}

module.exports = {menuList, testItem}

// 1 - display all menu items
// 2 -  Need to be able to select items
// 3 -  Create a form with radio buttons to select serveral items
// 4 -  submitting form will pass data to confirm page - display as the order page
// 5 -  handle bars template page - install handlebars
// 6 -  array of items in handlebars
