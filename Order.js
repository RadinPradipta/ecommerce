// Pemrosesan Pesanan:
// Implementasikan kelas Pesanan dengan metode untuk membuat pesanan baru dan menampilkan detail pesanan.

export default class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.totalAmount = 0;
    this.items = [];
  }

  createOrder = (cart) => {
    this.items = cart.items;
  };

  displayOrderDetails = () => {
    const productCounts = this.items.reduce((counts, item) => {
      const { productName, price } = item;

      if (counts[productName]) {
        counts[productName].count++;
      } else {
        counts[productName] = { count: 1, price };
      }
      return counts;
    }, {});

    for (const productName in productCounts) {
      const productInfo = productCounts[productName];
      const count = productInfo.count;
      const price = productInfo.price;
      const productPrice = count * price;
      this.totalAmount += productPrice;
      console.log(
        `Anda membeli ${count} ${productName} dengan harga satuan Rp. ${price} Total: Rp. ${productPrice}`
      );
    }
    console.log(`Total harga yang harus dibayarkan: Rp. ${this.totalAmount}`);
  };
}
