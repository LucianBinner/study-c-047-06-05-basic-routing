import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        {/* A vantagem do NavLink para o Link é que o NavLink falar quando um link esta ativo ou não, assim abrindo várias possibilidades */}
        {/* A flag de verificação se está ativo ou não também funciona com o className, conforme abaixo */}
        {/* <NavLink className={({ isActive }) => isActive ? "red" : "blue"} /> */}
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet /> {/* Renderiza as rotas filhas */}
    </div>
  );
}
