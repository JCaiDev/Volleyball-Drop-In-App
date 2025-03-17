import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";
import pool from "./src/config/db.js";
import gamesRoutes from "./src/routes/gameRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

// Test Database Connection
async function testDBConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Database connected at:", res.rows[0].now);
  } catch (error) {
    console.error("Database connection error:", err);
  }
}

//  Middlewares
app.use(express.json());
app.use(cors());

//  Routes
app.use("/api/users", userRoutes);
app.use("/api", gamesRoutes);

//  Error handling middleware

//  Server running
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  testDBConnection();
});

//  simple test route
app.get("/test", (req, res) => {
  res.send("Backend is working!");
});
