import { useState } from "react";

import styles from "./InputAdd.module.scss";

interface IInputAddProps {
  onAdd: (value: string) => void;
}

export const InputAdd = (props: IInputAddProps) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    props.onAdd(value);
    setValue("");
  };

  return (
    <div className={styles.Container}>
      <input className={styles.Input} value={value} onChange={(e) => setValue(e.target.value)} />

      <button className={styles.Button} onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
};
