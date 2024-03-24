import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    permission: {type: Array, required: true}
}, { strict: true });

 const User = mongoose.model('User', UserSchema);
 export = User;