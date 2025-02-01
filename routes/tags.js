import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const filePath = path.resolve('data', 'tags.json');
const tagsData = fs.readFileSync(filePath, 'utf-8');
const tags = JSON.parse(tagsData);

router.get("/endpoint1", function (req, res) {
  res.send(tags);
});

export default router;