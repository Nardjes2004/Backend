import mongoose from "mongoose";
import userSchema from "./schemas/userSchema.js";
import productSchema from "./schemas/productSchema.js";
import orderSchema from "./schemas/orderSchema.js";

export const usersCollection = mongoose.model("users", userSchema);

export const productsCollection = mongoose.model("products", productSchema)

export const ordersCollections = mongoose.model("orders", orderSchema)