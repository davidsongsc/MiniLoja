import React from 'react';
import IconePesquisa from './componentes/IconePesquisa';
import IconeCarrinho from './componentes/IconeCarrinho';
import IconeLogin from './componentes/iconeLogin';
import IconeShop from './componentes/iconeShop';
import IconeLook from './componentes/iconeLook';

const Header: React.FC = () => {


  return (
    <header style={{
      display: 'flex',
      background: 'whitesmoke',
      boxShadow: '1px 1px 5px #00000047',
      width: '100%',
      top: '-5px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      position: 'fixed',
    }}>
      <div className="menusanduiche">
        <div> </div>
        <div> </div>
        <div> </div>
      </div>
      <div className="logo">
        <h1 className="texto-logo"
          style={{
            fontFamily: 'inherit',
            letterSpacing: '5px',
            fontWeight: '100',
            textTransform: 'uppercase'
          }}>charlie&reg;</h1>

      </div>

      <div style={{
        display: 'flex',
        width: '70%',
        justifyContent: 'space-around'
      }}>
        <IconeShop width="24px" height="24px" color="black" />
        <IconeLook width="24px" height="24px" color="black" />
        <IconeLogin width="24px" height="24px" color="black" />
        <IconeCarrinho width="24px" height="24px" color="black" />
        <IconePesquisa width="24px" height="24px" color="black" />
      </div>
    </header>
  );
};

export default Header;
