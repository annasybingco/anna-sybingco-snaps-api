import express from "express";
import fs from "fs";
const router = express.Router();

const data = fs.readFileSync("./data/photos.json", "utf8");
const photos = JSON.parse(data);

router.get("/", function (req, res) {
  res.send(photos);
});

router.get("/:id", (req, res) => {
  const photo = photos.find((photo) => photo.id === req.params.id);

  if (!photo) {
    return res.status(404).json({ error: "Photo not found" });
  }

  res.json(photo);
});

router.get("/:id/comments", (req, res) => {
  const photo = photos.find((photo) => photo.id === req.params.id);

  if (!photo) {
    return res.status(404).json({ error: "Comment not found" });
  }

  res.json(photo.comments);
});

router.post("/:id/comments", (req, res) => {
  const photo = photos.find((photo) => photo.id === req.params.id);

  if (!photo) {
    return res.status(404).json({ error: "Photo not found" });
  }
  const newComment = {
    name: req.body.name,
    comment: req.body.comment,
    id: Date.now().toString(),
    timestamp: Date.now(),
  };

  photo.comments.push(newComment);

  res.status(201).json(photo.comments);
});

export default router;
