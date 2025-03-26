import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// create user
router.post("/", async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const result = await pool.query(
      `INSERT INTO users( name, email, role) VALUES ($1, $2, $3) RETURNING *`,
      [name, email, role]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get ALL users
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * from users");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
