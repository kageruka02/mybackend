"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
// Load the Swagger document
const swaggerDocument = yamljs_1.default.load('./swagger.yaml');
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("./mongoose");
const blog_1 = __importDefault(require("./blog"));
const messages_1 = __importDefault(require("./messages"));
const authenticate_1 = __importDefault(require("./authenticate"));
const checkauth_1 = __importDefault(require("./checkauth"));
const app = (0, express_1.default)();
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
function exampleUsage() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongoose_1.connect)();
            console.log('Database connected');
            // Perform database operations here
        }
        catch (error) {
            console.error('Error connecting to database:', error);
        }
    });
}
exampleUsage();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/blogss', checkauth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, topictext, description } = req.body;
        const newBlog = new blog_1.default({
            title,
            author,
            topictext,
            description
        });
        const SavedBlog = yield newBlog.save();
        res.status(201).json(SavedBlog);
    }
    catch (error) {
        res.status(500).send('Error creating blog entry');
    }
}));
app.get('/blogss', /*checkAuth,*/ (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_1.default.find({});
        if (blogs.length !== 0)
            res.status(200).send(blogs);
        else
            res.status(200).send('EMPTY');
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
app.get('/blogss/:id', /*checkAuth,*/ (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_1.default.findById(req.params.id);
        if (!blog)
            res.status(404).send('No blog found');
        else
            res.status(200).send(blog);
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
}));
app.patch('/blogss/:id', checkauth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog)
            res.status(404).send('No blog found');
        else
            res.status(200).send(blog);
    }
    catch (error) {
        res.status(500).send('Internal Server Error');
    }
}));
app.delete('/blogss/:id', checkauth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.id === 'deleteall') {
        try {
            yield blog_1.default.deleteMany({});
            res.status(200).send('All documents deleted successfully');
        }
        catch (err) {
            res.status(500).send('Error deleting documents');
        }
    }
    else {
        try {
            const blog = yield blog_1.default.findByIdAndDelete(req.params.id);
            if (!blog)
                res.status(404).send('No blog found');
            else
                res.status(200).json({ "message": "Blog deleted successfully" });
        }
        catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}));
app.use('/messages', messages_1.default);
app.use('/user', authenticate_1.default);
app.listen(4000, () => {
    console.log('server is running on the port');
});
exports.default = app;
