import { useEffect, useState } from 'react';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { Transaction } from '../Dashboard';
import { TransactionType } from '../NewTransactionModal';
import { Container } from './styles';

interface SummaryProps {
  transactions: Transaction[];
}

export function Summary({ transactions }: SummaryProps) {
  const [incomes, setIncomes] = useState(0);
  const [outcomes, setOutcomes] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const incomeSum = sumAllFromType(TransactionType.Deposit);
    const outcomeSum = sumAllFromType(TransactionType.Withdraw);
    setIncomes(incomeSum);
    setOutcomes(outcomeSum);
    setTotal(incomeSum + outcomeSum);
  }, [transactions]);

  function sumAllFromType(type: TransactionType) {
    return transactions
      .filter((transaction) => transaction.type === type)
      .map((transaction) => transaction.amount)
      .reduce((acc, curr) => acc + curr);
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas"></img>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(incomes)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas"></img>
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(outcomes)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total"></img>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
}
