# 📝 TODO List — Full Stack

Aplicação de gerenciamento de tarefas desenvolvida com uma arquitetura moderna, utilizando React no front-end, Node.js no back-end e persistência robusta em banco de dados PostgreSQL.

## 🔗 Deploy

> 🚀 Acesse a aplicação em produção: [Clique aqui](https://todo-list-react-six-roan.vercel.app/)

---

## 📸 Funcionalidades

- ✅ Adicionar novas tarefas
- ✅ Listar todas as tarefas
- ✅ Concluir tarefas (com persistência de estado)
- ✅ Remover tarefas
- ✅ Filtros por tarefas Concluídas e Pendentes
- ✅ Layout responsivo com SCSS Modules
- ✅ API RESTful integrada ao PostgreSQL

---

## 🛠️ Tecnologias

### Front-end
- **React** (v18+)
- **TypeScript**
- **Vite** (Build tool)
- **React Router DOM** (Navegação)
- **Axios** (Integração com API)
- **SCSS Modules** (Estilização isolada)

### Back-end
- **Node.js**
- **Express** (Framework HTTP)
- **TypeScript**
- **PostgreSQL** (Banco de dados relacional)
- **pg** (Driver PostgreSQL)
- **Dotenv** (Gerenciamento de variáveis de ambiente)

---

## 📁 Estrutura do Projeto

```
todo-list-react/
├── front-end/ # Hospedado na Vercel
│   └── src/
│       ├── components/  # Componentes reutilizáveis
│       ├── pages/       # Páginas da aplicação (Home, Concluded, Pending)
│       └── shared/      # Layouts, Serviços de API e Contextos
└── back-end/  # Hospedado no Render
    └── src/
        └── server.ts    # Servidor Express com PostgreSQL
```

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js instalado
- Instância do PostgreSQL rodando localmente (ou DATABASE_URL remota)

### Back-end

1. Crie um arquivo `.env` na pasta `back-end` com sua `DATABASE_URL`.
2. Instale as dependências e inicie o servidor:

```bash
cd back-end
npm install
npm run dev
```

O servidor vai rodar em `http://localhost:3333`

### Front-end

1. Crie um arquivo `.env` na pasta `front-end` com `VITE_API_URL=http://localhost:3333`.
2. Instale as dependências e inicie o projeto:

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
| PUT | `/api/todos/:id` | Atualiza o estado da tarefa (complete) |
| DELETE | `/api/todos/:id` | Remove uma tarefa permanentemente |

---

## 👩‍💻 Autora

Feito por [Renata Stephanie](https://www.linkedin.com/in/renata-stephanie/)
