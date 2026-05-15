import { NavLink } from 'react-router-dom';
import './AppLayout.scss';

export const AppLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="layout-base">
      <div className='layout-header'>
        <NavLink to='/'>Página Inicial</NavLink>
        <NavLink to='/concluidas'>Concluídas</NavLink>
        <NavLink to='/pendentes'>Pendentes</NavLink>
      </div>

      <hr className='layout-divider' />
      {children}
    </div>
  );
}