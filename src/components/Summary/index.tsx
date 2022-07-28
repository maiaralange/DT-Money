import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entradas"></img>
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImage} alt="Saídas"></img>
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="Total"></img>
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
