import { Router } from "express";
import { create, list, remove } from "../controllers/jobdone";

const router = Router();

router.get('/jobdones', list);
router.delete('/jobdones/:id', remove);
router.post('/jobdones', create);

export default router;