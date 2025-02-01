import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

const filePath = path.resolve('data', 'photos.json');
const photosData = fs.readFileSync(filePath, 'utf-8');
const photos = JSON.parse(photosData);

router.get("/endpoint2", function (req, res) {
  res.send(photos);
});

router.get("/endpoint2/:id", (req, res) => {
    const photo = photos.find(photo => photo.id === req.params.id);
    
    if (photo) {
        res.json({ photo });
    } else {
        res.status(404).json({ error: 'Photo not found' });
    }
});

router.get("/endpoint2/:photoId/comments/", (req, res) => {
    const { photoId, commentId } = req.params;
    const photo = photos.find(photo => photo.id === photoId);
    
    if (photo) {
        const comment = photo.comments.find(comment => comment.id === commentId);
        
        if (comment) {
            res.json({ comment });  // Send the found comment as a JSON response
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    } else {
        res.status(404).json({ error: 'Photo not found' });
    }
});

export default router;