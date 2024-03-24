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
require("./mongoose");
const schemamessages_1 = __importDefault(require("./schemamessages")); // Assuming 'message' is the correct model name
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import checkAuth from './checkauth';
const cors_1 = __importDefault(require("cors"));
const router = express_1.default.Router();
router.use(body_parser_1.default.json());
router.use((0, cors_1.default)());
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstname, lastname, email, subject, description } = req.body;
        const newMessage = new schemamessages_1.default({
            firstname,
            lastname,
            email,
            subject,
            description
        });
        if (!firstname || !lastname || !email || !subject || !description) {
            return res.status(400).json({ error: 'Incomplete data' });
        }
        const savedBlog = yield newMessage.save();
        res.status(201).json(savedBlog);
        console.log(savedBlog);
    }
    catch (error) {
        console.error('Error creating blog entry:', error);
        res.status(500).send('Error creating blog entry');
    }
}));
router.get('/', (req, res) => {
    schemamessages_1.default.find({})
        .then((messages) => {
        console.log(messages);
        if (messages.length !== 0)
            res.status(200).send(messages);
        else
            res.status(200).json({ "message": "No messages found" });
    })
        .catch((error) => {
        res.status(500).send('Internal Server Error');
    });
});
router.get('/:id', (req, res) => {
    schemamessages_1.default.findById(req.params.id)
        .then((message) => {
        if (!message)
            res.status(404).send('No message found');
        else
            res.status(200).send(message);
    })
        .catch((error) => {
        res.status(500).send('Internal Server Error');
    });
});
router.patch('/:id', (req, res) => {
    schemamessages_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((message) => {
        if (!message)
            res.status(404).send('No message found');
        else
            res.status(200).send(message);
    })
        .catch((error) => {
        res.status(500).send('Internal Server Error');
    });
});
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.params.id === 'deleteall') {
        try {
            yield schemamessages_1.default.deleteMany({});
            res.status(200).send('All messages deleted successfully');
        }
        catch (err) {
            res.status(500).send('Error deleting messages');
        }
    }
    else {
        schemamessages_1.default.findByIdAndDelete(req.params.id)
            .then((message) => {
            if (!message)
                res.status(404).send('No message found');
            else
                res.status(200).json({ "message": "Message deleted successfully" });
        })
            .catch((error) => {
            res.status(500).send('Internal Server Error');
        });
    }
}));
module.exports = router;
