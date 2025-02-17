import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: Ʒ,
        maxLength: 50,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "Email is required"],
        trim: true,
        minLength: 10,
        maxLength: 255,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, "Password is required"]
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;