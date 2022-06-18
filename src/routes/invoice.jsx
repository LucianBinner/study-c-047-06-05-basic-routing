import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  {
    /* useNavigate - Navega para a ppágina indicada. */
  }
  let location = useLocation();
  let params = useParams();
  {
    /* useParams - Usa os parametros passado as rotas*/
  }
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices' + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
