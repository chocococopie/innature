import express from "express";
import cors from "cors";
// import schoolsRouter from "./routes/schools";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
// app.use("/api/schools", schoolsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

