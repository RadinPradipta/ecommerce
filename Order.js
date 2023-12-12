export default class Order {
  constructor(orderId, totalAmount) {
    this.orderId = orderId;
    this.totalAmount = totalAmount;
    this.items = [];
  }

  createOrder = (cart) => {
    this.items = cart.items;
  };

  displayOrderDetails = () => {};
}
