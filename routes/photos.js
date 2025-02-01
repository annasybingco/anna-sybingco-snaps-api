import express from 'express';
import fs from 'fs';
const router = express.Router();

const data = fs.readFileSync('./data/photos.json', 'utf8')
console.log(data)

router.get("/photos", function (req, res) {
  res.send(data);
});

router.get("/endpoint2/:id", (req, res) => {
    const photo = photos.find(photo => photo.id === req.params.id);
    
    if (photo) {
        res.json({ photo });
    } else {
        res.status(404).json({ error: 'Photo not found' });
    }
});

// router.get("/endpoint2/:id/comments", (req, res) => {
//     const { photoId, commentId } = req.params;
//     const photo = photos.find(photo => photo.id === photoId);
    
//     if (photo) {
//         const comment = photo.comments.find(comment => comment.id === commentId);
        
//         if (comment) {
//             res.json({ comment });  // Send the found comment as a JSON response
//         } else {
//             res.status(404).json({ error: 'Comment not found' });
//         }
//     } else {
//         res.status(404).json({ error: 'Photo not found' });
//     }
// });

router.get("/endpoint2/:id/comments", (req, res) => {
    const comment = photos.find(photo => comment.id === req.params.id);
    
        
        if (comment) {
            res.json({ comment });  // Send the found comment as a JSON response
        } else {
            res.status(404).json({ error: 'Comment not found' });
        }
    }
);


export default router;