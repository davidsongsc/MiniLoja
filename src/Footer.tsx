import React, { useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaTiktok, FaTelegram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode realizar o envio do e-mail para o servidor ou executar outras ações necessárias
    console.log(`E-mail registrado: ${email}`);
    setEmail('');
  };

  return (
    <footer style={{
      backgroundColor: '#f7f7f6'

    }}>
      <div className="content-footer" style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
      }}>
        <div className="bloco-identifica" style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div className="logo">
            <h1 className="texto-logo" style={{
              textTransform: 'uppercase'
            }}>charlie&reg;</h1>
          </div>
          <a href="mailto:contato@cont.com">contato@cont.com</a>
          <a href="tel:+5521912345678">(21) 9 1234 5678</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">CNPJ 00.123.456/7891-23</a>
        </div>
        <div className="bloco-contato">
          <h1>contato</h1>
          <p>Dúvidas frequentes</p>
          <p>Trocas e devoluções</p>
          <p>Fretes e entregas</p>
          <p>Quero revender Charlie</p>
        </div>
        <div className="bloco-quemsomos">
          <h1>sobre nós</h1>
          <p>Quem somos</p>
          <p>Fundação</p>
        </div>
        <div className="cadastrar-email">
          <h4>Inscreva-se para receber nossas promoções</h4>
          <form onSubmit={handleFormSubmit}>
            <input type="email" placeholder="E-mail" value={email} onChange={handleInputChange} style={{ padding: '9px', width: '200px' }} />
            <button type="submit" style={{
              position: 'relative',
              left: '-42px',
              top: '6px'
            }}>
              <FiMail size={24} />
            </button>
          </form>
        </div>
      </div>

      <div className="informacoes-footer">
        <div className="mediasocial">
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            width: '83%'
          }}>
            <li>
              <FaFacebook size={24} />
            </li>
            <li>
              <FaInstagram size={24} />
            </li>
            <li>
              <FaTiktok size={24} />
            </li>
            <li>
              <FaYoutube size={24} />
            </li>
            <li>
              <FaWhatsapp size={24} />
            </li>
            <li>
              <FaTelegram size={24} />
            </li>
          </ul>
        </div>
        <div className="politicas" style={{
          display: 'flex',
          height: '110px',
          justifyContent: 'space-around',
          alignItems: 'flex-end'
        }}>
          <text>
            política de privacidade
          </text>
          <text>
            política de devoluções
          </text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
