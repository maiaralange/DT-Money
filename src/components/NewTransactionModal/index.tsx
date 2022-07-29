import Modal from 'react-modal';
import closeImage from '../../assets/close.svg';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImage} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImage} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImage} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
