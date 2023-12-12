// Implementasikan kelas Produk dan Kategori dengan properti dan metode yang sudah ditentukan.
// Pastikan bahwa sebuah produk dapat termasuk dalam beberapa kategori, dan implementasikan mekanisme untuk mengelola asosiasi ini.
export default class Category {
  constructor(categoryId, categoryName) {
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    this.products = [];
  }

  displayInfo = () => {
    return `Kategori: ${this.categoryName}`;
  };

  updateCategory = (name, id) => {
    this.categoryName = name;
    this.categoryId = id;
  };

  addProduct(product) {
    this.products.push(product);
  }

  printProducts() {
    console.log(`Produk dalam kategori ${this.categoryName}:`);
    for (const product of this.products) {
      product.displayInfo();
    }
  }
}
