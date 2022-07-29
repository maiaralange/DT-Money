import { createContext, ReactNode, useEffect, useState } from 'react';
import { Transaction } from '../components/Dashboard';
import { api } from '../services/api';

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('transactions');
      setTransactions(response.data.transactions);
    }
    fetchData();
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date()
    });
    setTransactions([...transactions, response.data.transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
