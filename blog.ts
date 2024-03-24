import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 20 },
    author: { type: String, required: true },
    topictext: { type: String, required: true },
    description: { type: String, required: true }
}, { strict: true });

const Blog = mongoose.model('Blog', blogSchema);

export = Blog;
