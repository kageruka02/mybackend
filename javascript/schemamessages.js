"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const Messages = new mongoose_1.default.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, match: /^[\w.%-]+@[\w.-]+\.[a-zA-Z]{2,4}$/ },
    subject: { type: String, required: true },
    description: { type: String, required: true }
}, { strict: true });
const messages = mongoose_1.default.model('message', Messages);
module.exports = messages;
