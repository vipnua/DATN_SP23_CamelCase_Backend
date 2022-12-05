import express from "express";
import { signup , signin, listUser, deleteUser, detailUser} from "../controllers/auth";

const router = express.Router()
router.post('/signup',signup)
router.post('/signin',signin)


router.get('/users',listUser)
router.delete('/users/:id',deleteUser)
router.get('/users/:id',detailUser)
export default router