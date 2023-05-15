import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            default: "no description added!"
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)

const UserModel = model('user', userSchema);
export default UserModel;