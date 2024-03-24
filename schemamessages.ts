import mongoose from 'mongoose'
const Messages = new mongoose.Schema(
   {
       firstname: {type: String, required: true},
       lastname: {type: String, required: true},
       email: { type: String, required: true, match: /^[\w.%-]+@[\w.-]+\.[a-zA-Z]{2,4}$/},
       subject: { type: String, required: true},
       description: {type: String, required: true} },{ strict: true }
) 
const messages = mongoose.model('message', Messages);
export = messages;
