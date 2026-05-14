import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem("book prince cruel", 23.00, 1);
const item2 = await createItem("manga one piece", 40.00, 3);
const item3 = await createItem("headset gamer", 150.00, 1);
const item4 = await createItem("teclado mecânico", 250.00, 1);
const item5 = await createItem("mouse", 100.00, 2);
const item6 = await createItem("", 250.00, 1);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
await cartService.addItem(myCart, item5);
await cartService.addItem(myCart, item6);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);

await cartService.calculateTotal(myCart);
