import express from 'express';
import path from 'path';
import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';


const app = express();
const port = 3000;

// Configure dotenv
config();

// Workaround for __dirname in ES6 modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/sports', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sports.html'));
});
// Endpoint to get the API key
app.get('/api/key', (req, res) => {
    res.json({ apiKey: process.env.API_KEY });
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'admin.html'));
});



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

// Define a route to get news articles
app.get('/api/news', async (req, res) => {
    try {
        const newsArticles = await News.find();
        res.json(newsArticles);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

