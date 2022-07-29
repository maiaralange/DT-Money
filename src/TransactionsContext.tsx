import { createContext, ReactNode, useEffect, useState } from 'react';
import { Transaction } from './components/Dashboard';
import { api } from './services/api';

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('transactions');
      setTransactions(response.data.transactions);
    }
    fetchData();
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
