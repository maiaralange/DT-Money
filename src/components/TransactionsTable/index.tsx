import { Transaction } from '../Dashboard';
import { Container } from './styles';

interface TransactionsTableProps {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                R$ {transaction.amount.toFixed(2)}
              </td>
              <td>{transaction.category}</td>
              {/* <td>{transaction.createdAt.toLocaleDateString('en-US')}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
