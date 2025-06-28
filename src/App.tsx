import { useState } from 'react';
import './App.css';
import QuizItem from './components/QuizItem';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Resultado from './components/Resultado';
import Footer from './components/Footer';
import GithubLink from './components/GithubLink';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
  {
    pergunta: 'O que o hook useState retorna?',
    options: [
      'Um número e uma string',
      'Um valor e uma função para atualizá-lo',
      'Uma lista de elementos',
    ],
    resposta: 'Um valor e uma função para atualizá-lo',
    id: 'p5',
  },
  {
    pergunta: 'O que o useEffect substitui nos ciclos de vida?',
    options: [
      'componentDidMount, componentDidUpdate e componentWillUnmount',
      'constructor',
      'render',
    ],
    resposta: 'componentDidMount, componentDidUpdate e componentWillUnmount',
    id: 'p6',
  },
  {
    pergunta: 'Qual extensão de arquivo é recomendada para componentes React?',
    options: ['.js', '.jsx', '.html'],
    resposta: '.jsx',
    id: 'p7',
  },
  {
    pergunta: 'JSX permite escrever o quê?',
    options: [
      'CSS dentro do JavaScript',
      'HTML dentro do JavaScript',
      'SQL dentro do React',
    ],
    resposta: 'HTML dentro do JavaScript',
    id: 'p8',
  },
  {
    pergunta: 'Qual hook é utilizado para memorizar valores computados?',
    options: ['useRef()', 'useMemo()', 'useCallback()'],
    resposta: 'useMemo()',
    id: 'p9',
  },
  {
    pergunta:
      'O que é necessário envolver ao retornar múltiplos elementos no JSX?',
    options: ['div', 'Fragment ou <>', 'section'],
    resposta: 'Fragment ou <>',
    id: 'p10',
  },
];

const respostasState = {
  p1: '',
  p2: '',
  p3: '',
  p4: '',
  p5: '',
  p6: '',
  p7: '',
  p8: '',
  p9: '',
  p10: '',
} as const;

type respostasIds = keyof typeof respostasState;

function App() {
  const [slide, setSlide] = useState(0);
  const [respostas, setRespostas] = useState(respostasState);
  const [resultado, setResultado] = useState<string | null>(null);

  const isStart = slide === 0;
  const isTryAgain = slide > perguntas.length;

  const resultadoFinal = () => {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id as respostasIds] === resposta,
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setRespostas({ ...respostas, [target.id]: target.value });
  };

  const handleClickReturn = () => {
    setSlide(slide - 1);
  };

  const handleClickNext = () => {
    if (isTryAgain) {
      setSlide(0);
      setResultado(null);
    } else if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 2);
      resultadoFinal();
    }
  };

  return (
    <>
      <GithubLink />
      <Header />
      <div className="container">
        <form onSubmit={(event) => event.preventDefault()}>
          {perguntas.map((pergunta, index) => (
            <QuizItem
              key={pergunta.id}
              active={slide === index + 1}
              onChange={handleChange}
              value={respostas[pergunta.id as respostasIds]}
              {...pergunta}
            />
          ))}
          {resultado ? <Resultado resultado={resultado} /> : undefined}
          <Navigation
            onClickNext={handleClickNext}
            onClickReturn={handleClickReturn}
            start={isStart}
            tryAgain={isTryAgain}
            disabled={
              !isStart &&
              !isTryAgain &&
              !respostas[perguntas[slide - 1].id as respostasIds]
            }
          />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;
