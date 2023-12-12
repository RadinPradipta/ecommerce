# Quick How To

1. Create Product instances
   ```
   const p1 = new Product(1, "Shampoo", 2500, "Good shampoo for your hair");
   ```
2. Create Category instances
   ```
   const soap = new Category(1, "Soap");
   ```
   to print all of product instance that have soap as category
   ```
   soap.printProducts();
   ```
3. Assign categories to Product instances
   ```
   p1.addCategory(cleaning);
   ```
4. Create a Cart instance
   ```
   const keranjang = new Cart(1);
   ```
5. Create order instance
   ```
   const order = new Order(1);
   ```
6. Add items to cart
   ```
   keranjang.addItem(p1, 15);
   ```
7. Pass cart object to order
   ```
   order.createOrder(keranjang);
   ```
8. Print order details
   ```
   order.displayOrderDetails();
   ```
