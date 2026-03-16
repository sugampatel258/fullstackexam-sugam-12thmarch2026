import { Model } from "objection";

export default class OrderItem extends Model {
  id!: number;
  order_id!: number;
  product_id!: string;
  quantity!: number;
  price!: number;

  static tableName = "order_items";
}
