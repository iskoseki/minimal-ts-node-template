import { Router } from "express";
import { getStock, getStockById, createStock } from "../handlers/stock";

const router = Router();

router.get("/", getStock)

router.get("/:id", getStockById)

router.post("/", createStock)

export default router
