import express from "express";
import api from "./routes/api.js";
import database from "./config/db.js";

const app = express();
app.use(express.json());

app.use("/api", api);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  database();
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
