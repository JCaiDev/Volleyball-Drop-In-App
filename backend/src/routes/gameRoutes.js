import express from "express";
import pool from "../config/db.js";

const router = express.Router();

// POST api/games - Create a new game
router.post("/games", async (req, res) => {
  try {
    const {
      user_id,
      title,
      date,
      start_time,
      end_time,
      location,
      max_players,
    } = req.body;
    if (!title) return res.status(400).json({ message: `Missing title.` });

    if (!start_time)
      return res.status(400).json({ message: `Missing start time.` });

    if (!date) return res.status(400).json({ message: `Missing date.` });

    if (!location)
      return res.status(400).json({ message: `Missing location.` });

    if (max_players === undefined)
      return res.status(400).json({ message: `Missing spots.` });

    const newGame = await pool.query(
      `INSERT INTO games (user_id, title, date, start_time, end_time, location, max_players)
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [user_id, title, date, start_time, end_time, location, max_players]
    );

    res.status(201).json(newGame.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error while hosting game" });
  }
});

export default router;
