import { createServer, Model } from "miragejs";

createServer({
  models: {
    todos: Model,
  },

  routes() {
    this.namespace = "api";

    // GET - lista todos
    this.get("/todos", (schema) => {
      return schema.all("todos");
    });

    // POST - cria novo todo
    this.post("/todos/:id", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);

      return schema.create("todos", attrs);
    });

    // PUT - atualiza um todo
    this.put("/todos/:id", (schema, request) => {
      const id = request.params.id;

      const newAttrs = JSON.parse(request.requestBody);

      const todo = schema.find("todos", id);
      todo?.update(newAttrs);

      return {};
    });

    // DELETE - remove um todo
    this.delete("/todos/:id", (schema, request) => {
      const id = request.params.id;

      const todo = schema.find("todos", id);
      todo?.destroy();

      return {};
    });
  },
});
