import mongoose from "mongoose";

let Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
                required: true,
            },
            quantity: { type: Number, required: true },
        },
    ],
    total_price: { type: Number, required: true },
    status: { type: String, required: true }, //shipped, processing, delivered
});

export default orderSchema;
