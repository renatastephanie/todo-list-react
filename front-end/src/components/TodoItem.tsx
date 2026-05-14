import TodoItemStyles from './TodoItem.module.scss';
interface ITodoItemProps {
  id: string;
  label: string;
  complete: boolean;
  onRemove(): void;
  onComplete(): void;
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {

  return (
    <li key={id} className={TodoItemStyles.Item} data-complete={complete}>
      <span className={TodoItemStyles.Text}>
        {label}
      </span>

      <div className={TodoItemStyles.ButtonsGroup}>
        {!complete && (
          <button onClick={onComplete} className={TodoItemStyles.ButtonComplete}>
            Concluir
          </button>
        )}
      </div>

      <button onClick={onRemove} className={TodoItemStyles.ButtonRemove}>
        Remover
      </button>
    </li>
  );
};