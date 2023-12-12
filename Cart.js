export default class Cart {
  constructor(cartID) {
    this.cartID = cartID;
    this.items = [];
  }

  addItem = (product, quantity) => {
    for (let i = 0; i < quantity; i++) {
      this.items.push(product);
    }
  };

  removeItem = (p) => {
    const filteredItems = this.filterProducts(p);
    this.items = filteredItems;
  };

  filterProducts(p) {
    return this.items.filter((product) => {
      return product.productName !== p.productName;
    });
  }

  viewCart = () => {
    return this.items;
  };
}
