import './mongoose';
import Message from './schemamessages'; // Assuming 'message' is the correct model name
import express, { Router } from 'express';
import bodyParser  from 'body-parser';
//import checkAuth from './checkauth';
import cors from 'cors';




const router: Router = express.Router();
router.use(bodyParser.json());

router.use(cors());
router.post('/',  async (req, res) => {
    try {
        const { firstname, lastname, email, subject, description } = req.body;
        const newMessage = new Message({
            firstname,
            lastname,
            email,
            subject,
            description
        });
        if (!firstname || !lastname || !email || !subject || !description) {
            return res.status(400).json({ error: 'Incomplete data' });
        }
        
        const savedBlog = await newMessage.save();
        res.status(201).json(savedBlog);
        console.log(savedBlog)
    } catch (error) {
        console.error('Error creating blog entry:', error);
        res.status(500).send('Error creating blog entry');
    }
});

router.get('/', (req, res) => {
    Message.find({})
        .then((messages) => {
            console.log(messages);
            if (messages.length !== 0)
                res.status(200).send(messages);
            else
                res.status(200).json({"message" : "No messages found"});
        })
        .catch((error) => {
            res.status(500).send('Internal Server Error');
        });
});

router.get('/:id', (req, res) => {
    Message.findById(req.params.id)
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

router.patch('/:id',  (req, res) => {
    Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
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

router.delete('/:id', async (req, res) => {
    if (req.params.id === 'deleteall') {
        try {
            await Message.deleteMany({});
            res.status(200).send('All messages deleted successfully');
        } catch (err) {
            res.status(500).send('Error deleting messages');
        }
    } else {
        Message.findByIdAndDelete(req.params.id)
            .then((message) => {
                if (!message)
                    res.status(404).send('No message found');
                else
                    res.status(200).json({"message":"Message deleted successfully"});
            })
            .catch((error) => {
                res.status(500).send('Internal Server Error');
            });
    }
});
export = router;
