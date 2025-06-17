import { Request, Response } from "express";
import pool from "../db";

export const getAllDevelopers = async (_req: Request, res: Response) => {
  try {
    const query = `
      SELECT 
        d.id AS developer_id,
        d.name,
        d.address,
        d.designation,
        s.skills,
        s.experiences
      FROM developers d
      LEFT JOIN skills s ON d.id = s.developer_id
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createDeveloper = async (req: Request, res: Response) => {
  const { name, skills } = req.body;

  try {
    const devResult = await pool.query(
      "INSERT INTO developers (name) VALUES ($1) RETURNING *",
      [name]
    );

    const developer = devResult.rows[0];
    await pool.query(
      "INSERT INTO skills (developer_id, skills) VALUES ($1, $2) RETURNING *",
      [developer.id, skills]
    );
    res.status(201).json({
      message: "Developer and skills created successfully",
      developer,
      skills: { skills },
    });
  } catch (err) {
    console.error("DB insert error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
