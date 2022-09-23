import React, { useContext } from 'react'; 
import cartLogo from '../../assets/images/cart.png'; 
const CartWidget = () => { 

  return (
  <>
                 <img src={cartLogo} alt="cart" width={32} height={32} />
                 <span>3</span>  
  </>
  );
};

export default CartWidget;
