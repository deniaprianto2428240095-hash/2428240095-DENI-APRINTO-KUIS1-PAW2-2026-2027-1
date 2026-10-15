import Furniture from "../models/furniture.js";

// GET all furnitures
export const listFurniture = async (req, res) => {
  try {
    const furnitures = await Furniture.find();
    res.json(furnitures);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET furniture by ID
export const getFurnitureById = async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    if (!furniture) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json(furniture);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// CREATE furniture
export const createFurniture = async (req, res) => {
  try {
    const furniture = new Furniture(req.body);
    await furniture.save();
    res.status(201).json(furniture);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE furniture
export const updateFurniture = async (req, res) => {
  try {
    const furniture = await Furniture.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
    res.json(furniture);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE furniture
export const deleteFurniture = async (req, res) => {
  try {
    await Furniture.findByIdAndDelete(req.params.id);
    res.json({ message: "Data berhasil dihapus" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
