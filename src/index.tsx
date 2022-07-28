import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de site',
          amount: 12000,
          type: 'deposit',
          category: 'Venda',
          createdAt: '04/13/2021'
        },
        {
          id: 2,
          title: 'Hamburger',
          amount: 59,
          type: 'withdraw',
          category: 'Alimentação',
          createdAt: '04/10/2021'
        },
        {
          id: 3,
          title: 'Aluguel do apartamento',
          amount: 1200,
          type: 'withdraw',
          category: 'Casa',
          createdAt: '03/27/2021'
        },
        {
          id: 4,
          title: 'Computador',
          amount: 5400,
          type: 'deposit',
          category: 'Venda',
          createdAt: '03/15/2021'
        }
      ];
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
