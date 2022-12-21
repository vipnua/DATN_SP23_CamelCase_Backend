import { Router } from "express";
import { addJobDone, getJobDone, getJobDones, removeJobDone } from "../controllers/jobdone";

const router = Router();

router.get('/jobdones', getJobDones);
router.delete('/jobdones/:id', removeJobDone);
router.get('/jobdones/:id', getJobDone);
router.post('/jobdones', addJobDone);

export default router;