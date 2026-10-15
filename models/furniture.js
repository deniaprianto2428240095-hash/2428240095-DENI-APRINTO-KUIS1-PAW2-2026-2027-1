import mongoose from "mongoose";

const furnitureSchema = new mongoose.Schema({
  nama_furniture: { type: String, required: true },
  bahan: { type: String, required: true },
  harga: { type: Number, required: true }
});

const Furniture = mongoose.model("Furniture", furnitureSchema);

export default Furniture;
