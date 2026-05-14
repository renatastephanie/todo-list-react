import ListStyles from "./List.module.scss";

export const List = ({ children }: React.PropsWithChildren) => {
  return (
    <ol className={ListStyles.List}>
      {children}
    </ol>
  );
};
