import { Model } from "objection";

export default class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;

  static tableName = "users";
}
