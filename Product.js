// Implementasikan kelas Produk dan Kategori dengan properti dan metode yang sudah ditentukan.
// Pastikan bahwa sebuah produk dapat termasuk dalam beberapa kategori, dan implementasikan mekanisme untuk mengelola asosiasi ini.
export default class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.categories = [];
  }

  toString() {
    return `${this.productName} Price: ${this.price} Desc: ${this.description}`;
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

  addCategory(category) {
    this.categories.push(category);
    category.addProduct(this);
  }
}
