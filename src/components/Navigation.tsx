import './Navigation.css';

type NavigationProps = {
  onClickReturn: () => void;
  onClickNext: () => void;
};

const Navigation = ({ onClickReturn, onClickNext }: NavigationProps) => {
  return (
    <div className="navigation__container">
      <button className="navigation__button--secondary" onClick={onClickReturn}>
        Voltar
      </button>
      <button className="navigation__button--primary" onClick={onClickNext}>
        Próxima
      </button>
    </div>
  );
};

export default Navigation;
