import './AppLayout.scss';

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="layout-base">
      <div className='layout-header'>
        <a>Página Inicial</a>
        <a>Sobre</a>
      </div>

      <hr className='layout-divider' />
      {children}
    </div>
  );
}