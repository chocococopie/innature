import { Router } from "express";
import { School } from "../types";

const router = Router();

// In-memory store
let schools: School[] = [];

// GET all schools
router.get("/", (req, res) => {
  res.json(schools);
});

// POST a new school
router.post("/", (req, res) => {
  const { name, contactPerson, email, phone } = req.body;

  if (!name || !contactPerson || !email || !phone) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newSchool: School = {
    id: schools.length + 1,
    name,
    contactPerson,
    email,
    phone,
  };

  schools.push(newSchool);
  res.status(201).json(newSchool);
});

export default router;
