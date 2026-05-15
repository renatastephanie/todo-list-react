import { useState, useEffect } from "react";
import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";
import { TodoItem } from "../components/TodoItem";
import { List } from "../components/List";
import { PageLayout } from "../shared/layout/page-layout/PageLayout";

export const Concluded = () => {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then((data) => {
      setList(data.filter((item) => item.complete));
    });
  }, []);

  const handleRemove = (id: string) => {
    TodoAPI.deleteById(id).then(() => {
      setList(list.filter((item) => item.id !== id));
    });
  };

  return (
    <PageLayout title="Tarefas Concluídas">
      <List>
        {list.length === 0 && <p>Nenhuma tarefa concluída</p>}
        {list.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            label={item.label}
            complete={item.complete}
            onRemove={() => handleRemove}
            onComplete={() => {}}
          />
        ))}
      </List>
    </PageLayout>
  );
};
