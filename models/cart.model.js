import mongoose from 'mongoose';
const Schema = new mongoose.Schema(
  {
    products: { type: Array, required: true}
  }
)
const Cart = mongoose.model("Cart", Schema);
export default Cart;