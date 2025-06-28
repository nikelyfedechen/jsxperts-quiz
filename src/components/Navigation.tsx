import './Navigation.css';

type NavigationProps = {
  onClickReturn: () => void;
  onClickNext: () => void;
  start: boolean;
  tryAgain: boolean;
  disabled: boolean;
};

const Navigation = ({
  onClickReturn,
  onClickNext,
  start,
  tryAgain,
  disabled,
}: NavigationProps) => {
  return (
    <div className="btn-conteiner">
      {!start && !tryAgain && (
        <button className="btn-secondary" onClick={onClickReturn}>
          Voltar
        </button>
      )}
      <button className="btn-primary" onClick={onClickNext} disabled={disabled}>
        {start ? 'Começar' : tryAgain ? 'Tentar novamente' : 'Próxima'}
      </button>
    </div>
  );
};

export default Navigation;
