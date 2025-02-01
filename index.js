import express from 'express';
import cors from 'cors';
import tagsRoute from './routes/tags.js';
import photosRoute from './routes/photos.js';
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
    res.send('Express is running!');
});


app.use('/api/tags', tagsRoute);

app.use('/api/photos', photosRoute);

app.listen (8888, function() {
    console.log('listening')
})