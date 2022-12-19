import { Router } from "express";
import { addPost, editPost, getPost, getPosts, removePost, searchPost } from "../controllers/post";

const router = Router()

router.get('/posts', getPosts)
router.get('/posts/:id', getPost)
router.post('/posts', addPost)
router.put('/posts/:id', editPost)
router.delete('/posts/:id', removePost)
router.post('/search', searchPost)

export default router