
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
// Define the type for the Swagger document
interface SwaggerDocument {
    // Define the structure of your Swagger document here
    // For example:
    info: {
      title: string;
      version: string;
      description?: string;
    };
    // Add other properties as needed
  }
 
  
  // Load the Swagger document
  const swaggerDocument: SwaggerDocument = YAML.load('./swagger.yaml');
 





import cors from 'cors';
import express from 'express';
import {connect , close} from './mongoose';
import Blog from './blog'
import router from './messages';
import routerUser from './authenticate';
import checkAuth from './checkauth';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

async function exampleUsage() {
    try {
        await connect();
        console.log('Database connected');
        // Perform database operations here
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}
exampleUsage();
app.use(cors());
app.use(express.json());
app.post('/blogss',checkAuth, async (req, res) => {
    try {
        const { title, author, topictext, description } = req.body;
        const newBlog = new Blog({
            title,
            author,
            topictext,
            description
        });
        const SavedBlog = await newBlog.save();
        res.status(201).json(SavedBlog);
    } catch (error) {
        res.status(500).send('Error creating blog entry');
    }
});
app.get('/blogss',/*checkAuth,*/ async (req, res) => {
    try {
        const blogs = await Blog.find({});
        if (blogs.length !== 0)
            res.status(200).send(blogs);
        else
            res.status(200).send('EMPTY');
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/blogss/:id',/*checkAuth,*/ async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog)
            res.status(404).send('No blog found');
        else
            res.status(200).send(blog);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.patch('/blogss/:id',checkAuth, async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog)
            res.status(404).send('No blog found');
        else
            res.status(200).send(blog);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.delete('/blogss/:id', checkAuth, async (req, res) => {
    if (req.params.id === 'deleteall') {
        try {
            await Blog.deleteMany({});
            res.status(200).send('All documents deleted successfully');
        } catch (err) {
            res.status(500).send('Error deleting documents');
        }
    } else {
        try {
            const blog = await Blog.findByIdAndDelete(req.params.id);
            if (!blog)
                res.status(404).send('No blog found');
            else
                res.status(200).json({"message" : "Blog deleted successfully"});
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
});



app.use('/messages', router);
app.use('/user', routerUser);

app.listen(4000 , () => {
    console.log('server is running on the port')

} )
export default app;