import "dotenv/config";
import express from "express";
import cors from "cors";



const app = express();
app.use(cors());
app.use(express.json());

// Configuração do PostgreSQL
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: connectionString?.includes("localhost") || !connectionString
    ? false
    : { rejectUnauthorized: false },
});

// Criar tabela se não existir
const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        label TEXT NOT NULL,
        complete BOOLEAN DEFAULT FALSE
      )
    `);
    console.log("Banco de dados inicializado");
  } catch (err) {
    console.error("Erro ao inicializar banco de dados:", err);
    process.exit(1);
  }
};

app.get("/api/todos", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    res.json({ todos: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

app.post("/api/todos", async (req, res) => {
  const { label } = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO todos (label, complete) VALUES ($1, $2) RETURNING *",
      [label, false]
    );
    res.json({ todo: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
});

app.put("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { complete } = req.body;
  try {
    const { rows } = await pool.query(
      "UPDATE todos SET complete = $1 WHERE id = $2 RETURNING *",
      [complete, Number(id)]
    );
    res.json({ todo: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM todos WHERE id = $1", [Number(id)]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
});

const start = async () => {
  await initDb();
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
};

start();
