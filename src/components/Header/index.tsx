import logoImage from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({
  onOpenNewTransactionModal: openNewTransactionModal
}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImage} alt="dtmoney logo"></img>
        <button type="button" onClick={openNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
