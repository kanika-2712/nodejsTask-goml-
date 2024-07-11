import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Initialize express app
const app = express();
console.log("this is not working");
// Configure EJS as the templating engine
app.set('view engine', 'ejs');

// Resolve directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/newsData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema and model for news articles
const newsSchema = new mongoose.Schema({
    title: String,
    details: String,
});

const News = mongoose.model('News', newsSchema);

// Define a route to render the homepage
app.get('/', async (req, res) => {
    try {
        const newsArticles = await News.find();
        res.render('index', { newsArticles });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
