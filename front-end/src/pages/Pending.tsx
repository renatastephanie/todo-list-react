import { useEffect, useState } from "react";
import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";
import { TodoItem } from "../components/TodoItem";
import { List } from "../components/List";
import { PageLayout } from "../shared/layout/page-layout/PageLayout";

export const Pending = () => {
  const [list, setlist] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then((data) => {
      setlist(data.filter((item) => !item.complete));
    });
  }, []);

  const handleRemove = (id: string) => {
    TodoAPI.deleteById(id).then(() => {
      setlist(list.filter((item) => item.id !== id));
    });
  };

  const handleComplete = (id: string) => {
    TodoAPI.updateById(id, { complete: true }).then(() => {
      TodoAPI.getAll().then((data) => {
        setlist(data.filter((item) => !item.complete));
      });
    });
  };

  return (
    <PageLayout title="Tarefas Pendentes">
      <List>
        {list.length === 0 && <p>Nenhuma tarefa pendente</p>}
        {list.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            label={item.label}
            complete={item.complete}
            onRemove={() => handleRemove(item.id)}
            onComplete={() => handleComplete(item.id)}
          />
        ))}
      </List>
    </PageLayout>
  );
};
