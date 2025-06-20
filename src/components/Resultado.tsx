type ResultadoProps = {
  resultado: string;
};

const Resultado = ({ resultado }: ResultadoProps) => {
  return <p>{resultado}</p>;
};

export default Resultado;
