import { ShoppingCart } from 'shared/models/shopping-carts';
export class Order {
  datePlaced: number;
  items: any[];
  constructor(
    shoppingCart: ShoppingCart,
    public shipping: any,
    public userId: string
  ) {
    this.datePlaced = new Date().getTime();

    this.items = shoppingCart.items.map((item) => {
      return {
        product: {
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price,
        },
        qunatity: item.quantity,
        totalPrice: item.totalPrice,
      };
    });
  }
}
