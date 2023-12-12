import Product from "./Product.js";
import Category from "./Category.js";
import Cart from "./Cart.js";

//Create Category instances
const dairy = new Category(1, "Dairy");
const soap = new Category(2, "Soap");

//Create Product instances
const p1 = new Product(1, "Shampoo", 2500, "Good shampoo for your hair");
const p2 = new Product(2, "Milk", 12500, "Healthy milk");

//Create a Cart instance
const keranjang = new Cart(1);

dairy.addProduct(p2);

dairy.products();

//Push
