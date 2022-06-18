import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data';

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  {
    /* useSearchParams - Pesquisa parametros passados na url e também seta parametros na url  */
  }
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {/* A vantagem do NavLink para o Link é que o NavLink falar quando um link esta ativo ou não, assim abrindo várias possibilidades */}
        {/* A flag de verificação se está ativo ou não também funciona com o className, conforme abaixo */}
        {/* <NavLink className={({ isActive }) => isActive ? "red" : "blue"} /> */}
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
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
