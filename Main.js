import Product from "./Product.js";
import Category from "./Category.js";
import Cart from "./Cart.js";
import Order from "./Order.js";

//Create Category instances
const dairy = new Category(1, "Dairy");
const soap = new Category(2, "Soap");
const beverage = new Category(3, "Beverage");
const cleaning = new Category(4, "Cleaning");

//Create Product instances
const p1 = new Product(1, "Shampoo", 2500, "Good shampoo for your hair");
const p2 = new Product(2, "Milk", 12500, "Healthy milk");
const p3 = new Product(3, "Soda", 5000, "Refreshing soda");

//Assign categories to Product instances
p1.addCategory(cleaning);
p1.addCategory(soap);
p2.addCategory(dairy);
p2.addCategory(beverage);
p3.addCategory(beverage);

//Print all beverages
beverage.printProducts();

//Create a Cart instance
const keranjang = new Cart(1);

//Add 5 items of p1 to keranjang
keranjang.addItem(p1, 15);
keranjang.addItem(p2, 15);

//Create order instance
const order = new Order(1);

//Pass cart object to order
order.createOrder(keranjang);

//Print order details
console.log("Detail Order :");
order.displayOrderDetails();
