import { useState, useEffect } from "react";

import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";
import { TodoItem } from "../components/TodoItem";
import { InputAdd } from "../components/InputAdd";
import { List } from "../components/List";
import { PageLayout } from "../shared/layout/page-layout/PageLayout";

export const Home = () => {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then((data) => setList(data));
  }, []);

  const handleAdd = (value: string) => {
    TodoAPI.create({ label: value, complete: false }).then(() =>
      TodoAPI.getAll().then((data) => setList(data)),
    );
  };

  const handleRemove = (id: string) => {
    TodoAPI.deleteById(id).then(() => {
      setList([...list.filter((item) => item.id !== id)]);
    });
  };
  const handleComplete = (id: string) => {
    TodoAPI.updateById(id, { complete: true }).then(() => {
      TodoAPI.getAll().then((data) => setList(data));
    });
  };

  return (
    <>
      <PageLayout title="TODO List">
        <InputAdd onAdd={handleAdd} />

        <List>
          {list.map((listItem) => (
            <TodoItem
              key={listItem.id}
              id={listItem.id}
              label={listItem.label}
              complete={listItem.complete}
              onRemove={() => handleRemove(listItem.id)}
              onComplete={() => handleComplete(listItem.id)}
            />
          ))}
        </List>
      </PageLayout>
    </>
  );
};
