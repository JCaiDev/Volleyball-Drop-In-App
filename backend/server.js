import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./src/routes/userRoutes.js";
import pool from "./src/config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Test Database Connection
async function testDBConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ Connected to PostgreSQL! Time:", res.rows[0].now);
  } catch (error) {
    console.error("❌ Database connection error:", err);
  }
}

//  Middlewares
app.use(express.json());
app.use(cors());

//  Routes
app.use("/api/users", userRoutes);

//  Error handling middleware

//  Server running
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
  testDBConnection();
});
