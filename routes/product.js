import { Router } from "express";
import { create, list, read, remove, search, update } from "../controllers/product";

const router = Router();

router.get('/products', list);
router.get('/products/:id', read);
router.post('/products', create);
router.delete('/products/:id', remove);
router.put("/products/:id", update)
router.post("/search", search)     

export default router;