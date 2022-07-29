import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { TransactionType } from '../NewTransactionModal';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  createdAt: string;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('transactions');
      setTransactions(response.data.transactions);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Summary transactions={transactions} />
      <TransactionsTable transactions={transactions} />
    </Container>
  );
}
