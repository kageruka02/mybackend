"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const mongoose_1 = __importDefault(require("mongoose"));
const blogSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, maxlength: 20 },
    author: { type: String, required: true },
    topictext: { type: String, required: true },
    description: { type: String, required: true }
}, { strict: true });
const Blog = mongoose_1.default.model('Blog', blogSchema);
module.exports = Blog;
