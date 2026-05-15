import styles from './TodoItem.module.scss';
interface ITodoItemProps {
  id: string;
  label: string;
  complete: boolean;
  onRemove(): void;
  onComplete(): void;
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {

  return (
    <li key={id} className={styles.Item} data-complete={complete ? "true" : "false"}>
      <span className={styles.Text}>
        {label}
      </span>

      <div className={styles.ButtonsGroup}>
        {!complete && (
          <button onClick={onComplete} className={styles.ButtonComplete}>
            Concluir
          </button>
        )}
      </div>

      <button onClick={onRemove} className={styles.ButtonRemove}>
        Remover
      </button>
    </li>
  );
};