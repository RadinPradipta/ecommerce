class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
  }

  toString() {
    return `${this.productId} ${this.productName} ${this.price} ${this.description}`;
  }

  displayInfo() {
    console.log(this.toString());
  }

  updateProduct(product) {
    this.productId = product.productId;
    this.productName = product.productName;
    this.price = product.price;
    this.description = product.description;
  }
}
