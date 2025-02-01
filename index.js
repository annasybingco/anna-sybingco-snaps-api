import express from 'express';
import cors from 'cors';
import tagsRoute from './routes/tags.js'

const app = express();

app.use(cors())

app.use('/api', tagsRoute)

app.get('/', function(req, res) {
    console.log('inside tag endpoint')
    res.send('Welcome to /');
});

app.listen (8888, function() {
    console.log('Hello World')
})