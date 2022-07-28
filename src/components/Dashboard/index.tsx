import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: Date;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('transactions');
      setTransactions(response.data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Summary />
      <TransactionsTable transactions={transactions} />
    </Container>
  );
}
