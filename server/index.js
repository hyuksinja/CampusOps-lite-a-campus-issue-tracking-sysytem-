import express from "express";
import cors from "cors";
import { db } from "./firebase.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Add issue
app.post("/report", async (req, res) => {
  try {
    const { name, department, category, description, userId } = req.body;
    const docRef = await db.collection("issues").add({
      name,
      department,
      category,
      description,
      userId,
      status: "Pending",
      createdAt: new Date()
    });
    res.json({ success: true, id: docRef.id });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err.message });
  }
});

// Get all issues
app.get("/issues", async (req, res) => {
  try {
    const snapshot = await db.collection("issues").orderBy("createdAt", "desc").get();
    const issues = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(issues);
  } catch (err) {
    console.error(err);
    res.json([]);
  }
});

// Update issue status (admin)
app.post("/update-status", async (req, res) => {
  try {
    const { id, status } = req.body;
    await db.collection("issues").doc(id).update({ status });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
