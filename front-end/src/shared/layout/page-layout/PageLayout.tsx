import styles from "./PageLayout.module.scss";

interface IPageLayoutProps { 
  children: React.ReactNode;
  title: string;
}

export const PageLayout = ({children, title}: IPageLayoutProps) => {
  return (
    <div className={styles.pageLayoutContainer}>
      <div className={styles.pageContent}>
        <div>
          <h1 className={styles.pageTitle}>{title}</h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}