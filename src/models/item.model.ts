import { Schema, model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const itemSchema = new Schema<Car>(
    {
        color: {
            type: String,
            required: true

        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        gas: {
            type: String,
            enum: ["Gasoline", "Electic", "Diesel"],
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemModel = model('items', itemSchema);

export default ItemModel;