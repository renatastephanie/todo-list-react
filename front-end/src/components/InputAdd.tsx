import { useState } from "react";

import InputAddStyles from "./InputAdd.module.css";

interface IInputAddProps {
  onAdd: (value: string) => void;
}

export const InputAdd = (props: IInputAddProps) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    props.onAdd(value);
    setValue("");
  };

  return (
    <div className={InputAddStyles.Container}>
      <input className={InputAddStyles.Input} value={value} onChange={(e) => setValue(e.target.value)} />

      <button className={InputAddStyles.Button} onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
};
