import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("todos.db");

db.run(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL,
    complete INTEGER DEFAULT 0
  )
`);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/todos", (req, res) => {
  db.all("SELECT * FROM todos", (err, rows) => {
    res.json({ todos: rows });
  });
});

app.post("/api/todos", (req, res) => {
  const { label } = req.body;
  db.run(
    "INSERT INTO todos (label, complete) VALUES (?, 0)",
    [label],
    function (err) {
      db.get("SELECT * FROM todos WHERE id = ?", [this.lastID], (err, row) => {
        res.json({ todo: row });
      });
    },
  );
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { complete } = req.body;
  db.run(
    "UPDATE todos SET complete = ? WHERE id = ?",
    [complete ? 1 : 0, id],
    () => {
      db.get("SELECT * FROM todos WHERE id = ?", [id], (err, row) => {
        res.json({ todo: row });
      });
    },
  );
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM todos WHERE id = ?", [id], () => {
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
