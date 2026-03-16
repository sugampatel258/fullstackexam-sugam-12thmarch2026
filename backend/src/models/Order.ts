import { Model } from "objection";

export default class Order extends Model {
  id!: number;
  user_id!: number;
  total_amount!: number;

  static tableName = "orders";
}
