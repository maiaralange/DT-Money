import { useContext, useEffect, useState } from 'react';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { formatCurrency } from '../../commons/Formatter';
import { TransactionsContext } from '../../context/TransactionsContext';
import { Transaction } from '../Dashboard';
import { TransactionType } from '../NewTransactionModal';
import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionsContext);
  const [deposits, setDeposits] = useState(0);
  const [withdraws, setWithdraws] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const depositSum = sumAllFromType(TransactionType.Deposit, transactions);
    const withdrawSum = sumAllFromType(TransactionType.Withdraw, transactions);
    setDeposits(depositSum);
    setWithdraws(withdrawSum);
    setTotal(depositSum - withdrawSum);
  }, [transactions]);

  function sumAllFromType(type: TransactionType, transactions: Transaction[]) {
    return transactions
      .filter((transaction) => transaction.type === type)
      .map((transaction) => transaction.amount)
      .reduce((acc, curr) => acc + curr, 0);
  }

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas"></img>
        </header>
        <strong>{formatCurrency(deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas"></img>
        </header>
        <strong>- {formatCurrency(withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total"></img>
        </header>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </Container>
  );
}
