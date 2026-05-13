import PageLayoutStyles from "./PageLayout.module.css";

interface IPageLayoutProps { 
  children: React.ReactNode;
  title: string;
}

export const PageLayout = ({children, title}: IPageLayoutProps) => {
  return (
    <div className={PageLayoutStyles.pageLayoutContainer}>
      <div className={PageLayoutStyles.pageContent}>
        <div>
          <h1 className={PageLayoutStyles.pageTitle}>{title}</h1>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}