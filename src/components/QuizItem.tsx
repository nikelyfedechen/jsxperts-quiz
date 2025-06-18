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
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ fontFamily: 'monospace' }}>
          <input
            type="radio"
            id={id}
            value={option}
            checked={value === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default QuizItem;
