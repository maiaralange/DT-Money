import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { TransactionType } from './components/NewTransactionModal';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 12000,
          type: TransactionType.Deposit,
          category: 'Venda',
          createdAt: new Date('2021-04-13 09:00:00')
        },
        {
          id: 2,
          title: 'Hamburger',
          amount: 59,
          type: TransactionType.Withdraw,
          category: 'Alimentação',
          createdAt: new Date('2021-04-10 09:00:00')
        },
        {
          id: 3,
          title: 'Aluguel do apartamento',
          amount: 1200,
          type: TransactionType.Withdraw,
          category: 'Casa',
          createdAt: new Date('2021-03-27 09:00:00')
        },
        {
          id: 4,
          title: 'Computador',
          amount: 5400,
          type: TransactionType.Deposit,
          category: 'Venda',
          createdAt: new Date('2021-03-15 09:00:00')
        }
      ]
    });
  },
  routes() {
    this.namespace = 'api';
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
  }
});

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
