import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Melakukan koneksi ke MongoDB");

    const response = await mongoose.connect(
      "mongodb://127.0.0.1:27017/deni_aprianto_furniture?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.8"
    );

    console.log(
      `Koneksi ke MongoDB berhasil. Host: ${response.connection.host}`
    );
  } catch (error) {
    console.error("Gagal terkoneksi dengan MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;

