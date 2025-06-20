import './Footer.css';

const Footer = () => {
  return (
    <div className="divider">
      <small>
        © {new Date().getFullYear()} JSXperts: o quiz dos devs React | Criado
        por Nikely Fedechen
      </small>
    </div>
  );
};

export default Footer;
