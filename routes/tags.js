import express from 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const router = express.Router();
const tags = require('../data/tags.json'); 

router.get('/tags', (req, res) => {
    res.json(tags)
})

export default router