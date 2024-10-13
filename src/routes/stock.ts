import { Router } from "express";
import { getStock, getStockById } from "../handlers/stock";

const router = Router();

router.get("/", getStock)

router.get("/:id", getStockById)

router.post("/", (req, res) => {
    res.send({})
}) 

export default router
