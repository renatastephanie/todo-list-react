# 📝 TODO List — Full Stack

Aplicação de gerenciamento de tarefas desenvolvida com React no front-end e Node.js no back-end, com persistência real em banco de dados SQLite.

## 🔗 Deploy

> 🚀 Acesse a aplicação em produção: [Clique aqui](https://todo-list-react-six-roan.vercel.app/)

---

## 📸 Funcionalidades

- ✅ Adicionar novas tarefas
- ✅ Listar todas as tarefas
- ✅ Concluir tarefas (com texto riscado)
- ✅ Remover tarefas
- ✅ Página de tarefas concluídas
- ✅ Página de tarefas pendentes
- ✅ Validação de campo vazio

---

## 🛠️ Tecnologias

### Front-end
- React
- TypeScript
- Vite
- React Router DOM
- Axios
- SCSS Modules

### Back-end
- Node.js
- Express
- TypeScript
- Better SQLite3
- Nodemon

---

## 📁 Estrutura do Projeto

```
todo-list-react/
├── front-end/
│   └── src/
│       ├── components/
│       │   ├── InputAdd/
│       │   ├── List/
│       │   └── TodoItem/
│       ├── pages/
│       │   ├── Home.tsx
│       │   ├── Concluded.tsx
│       │   └── Pending.tsx
│       └── shared/
│           ├── layout/
│           └── services/
└── back-end/
    └── src/
        └── server.ts
```

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js instalado
- npm instalado

### Back-end

```bash
cd back-end
npm install
npm run dev
```

O servidor vai rodar em `http://localhost:3333`

### Front-end

```bash
cd front-end
npm install
npm run dev
```

O front vai rodar em `http://localhost:5173`

---

## 🔌 Rotas da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/todos` | Lista todas as tarefas |
| POST | `/api/todos` | Cria uma nova tarefa |
| PUT | `/api/todos/:id` | Atualiza uma tarefa |
| DELETE | `/api/todos/:id` | Remove uma tarefa |

---

## 👩‍💻 Autora

Feito por [Renata Stephanie](https://www.linkedin.com/in/renata-stephanie/)