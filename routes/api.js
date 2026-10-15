import express from "express";
import * as furnitureController from "../controller/furniture.js";

const router = express.Router();

// CREATE - tambah data furniture
router.post("/", furnitureController.createFurniture);

// READ - semua data furniture
router.get("/", furnitureController.listFurniture);

// READ - detail furniture by ID
router.get("/:id", furnitureController.getFurnitureById);

// UPDATE - ubah data furniture by ID
router.put("/:id", furnitureController.updateFurniture);

// DELETE - hapus data furniture by ID
router.delete("/:id", furnitureController.deleteFurniture);

export default router;
