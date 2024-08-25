import express from 'express';
import { createComment, getComments, deleteComment } from '../controllers/commentController.js';

const router = express.Router();

router.post('/comments', createComment);
router.get('/comments', getComments);
router.delete('/comments/:id', deleteComment);

export default router;
