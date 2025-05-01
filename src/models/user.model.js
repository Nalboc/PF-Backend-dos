import { Schema, model } from "mongoose";

const userSchema = new Schema({
  first_name: { type: String },

  last_name: { type: String },

  email: { type: String } /*debe ser unico}*/,

  age: { type: Number },

  password: { type: Number } /*TODO:en formato hash*/,

  cart: { type: String } /*id con referencia a carts*/,

  role: { type: String, default: "user" },
  id: { type: Number },
});

export const UserModel = model("users", userSchema);
