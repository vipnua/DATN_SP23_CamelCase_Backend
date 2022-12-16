import { Router } from "express";
import { create, list, read, remove } from "../controllers/jobdone";

const router = Router();

router.get('/jobdones', list);
router.delete('/jobdones/:id', remove);
router.get('/jobdones/:id', read);
router.post('/jobdones', create);

export default router;