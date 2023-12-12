// Interaksi dengan Keranjang:
// Implementasikan kelas Keranjang dengan metode untuk menambahkan, menghapus item, dan melihat isi keranjang.

export default class Cart {
  constructor(cartID) {
    this.cartID = cartID;
    this.items = [];
  }

  //Method to add product
  addItem = (product, quantity) => {
    for (let i = 0; i < quantity; i++) {
      this.items.push(product);
    }
  };

  //Method to remove product
  removeItem = (p) => {
    const filteredItems = this.filterProducts(p);
    this.items = filteredItems;
  };

  //Method
  filterProducts(p) {
    return this.items.filter((product) => {
      return product.productName !== p.productName;
    });
  }

  viewCart = () => {
    return this.items;
  };
}
