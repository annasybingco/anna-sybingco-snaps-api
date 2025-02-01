import express from 'express';
import fs from 'fs';
const router = express.Router();

const data = fs.readFileSync('./data/tags.json', 'utf8');

router.get("/tags", function (req, res) {
  res.send(data);
});

export default router;