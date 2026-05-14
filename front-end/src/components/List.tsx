import styles from "./List.module.scss";

export const List = ({ children }: React.PropsWithChildren) => {
  return (
    <ol className={styles.List}>
      {children}
    </ol>
  );
};
