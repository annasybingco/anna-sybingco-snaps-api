import express from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const router = express.Router();
const photos = require('../data/photos.json'); 

router.get('/photos', (req, res) => {
    res.json(photos)
})

export default router