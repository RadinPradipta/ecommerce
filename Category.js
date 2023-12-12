export default class Category {
  constructor(categoryId, categoryName) {
    this.categoryName = categoryName;
    this.categoryId = categoryId;
    this.items = [];
  }

  displayInfo = () => {
    return `Kategori: ${this.categoryName}`;
  };

  addProduct = (product) => {
    this.items.push(product);
  };

  updateCategory = (name, id) => {
    this.categoryName = name;
    this.categoryId = id;
  };

  products = () => {
    console.log(`List of Product in ${this.categoryName} :`);
    for (const key in this.items) {
      const p = this.items[key];
      p.displayInfo();
    }
  };
}
