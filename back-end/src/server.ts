import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

interface ITodo {
  id: number;
  label: string;
  complete: number;
}

const db = new Database("todos.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label TEXT NOT NULL,
    complete INTEGER DEFAULT 0
  )
`);

const app = express();

app.use(cors());
app.use(express.json());

// GET - lista todos
app.get("/api/todos", (req, res) => {
  const todos = db.prepare("SELECT * FROM todos").all();
  res.json({ todos });
});

// POST - cria novo todo
app.post("/api/todos", (req, res) => {
  const { label } = req.body;
  const result = db
    .prepare("INSERT INTO todos (label, complete) VALUES (?, 0)")
    .run(label);

  const todo = db
    .prepare("SELECT * FROM todos WHERE id = ?")
    .get(result.lastInsertRowid) as ITodo;

  res.json({ todo });
});

// PUT - atualiza um todo
app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { complete } = req.body;

  db.prepare("UPDATE todos SET complete = ? WHERE id = ?").run(
    complete ? 1 : 0,
    id,
  );

  const todo = db.prepare("SELECT * FROM todos WHERE id = ?").get(id) as ITodo;

  res.json({ todo });
});

// DELETE - remove um todo
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  db.prepare("DELETE FROM todos WHERE id = ?").run(id);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
