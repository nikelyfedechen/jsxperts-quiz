import './QuizItem.css';

type QuizItemProps = {
  pergunta: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  active: boolean;
  id: string;
};

const QuizItem = ({
  pergunta,
  options,
  onChange,
  value,
  active,
  id,
}: QuizItemProps) => {
  if (active === false) return null;
  return (
    <div className="quiz">
      <h2 className="quiz__question">{pergunta}</h2>
      <div className="quiz__options">
        {options.map((option) => (
          <div key={option} className="quiz__options--item">
            <label style={{ fontFamily: 'monospace' }}>
              <input
                type="radio"
                id={id}
                value={option}
                checked={value === option}
                onChange={onChange}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizItem;
