import { Router } from "express";
import {list, read, remove } from "../controllers/profile";

const router = Router();

router.get('/profiles', list);
router.get('/profiles/:id', read);
router.delete('/profiles/:id', remove);

export default router;