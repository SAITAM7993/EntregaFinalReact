//materialUI
import { Tooltip, Badge, IconButton } from '@mui/material';

//iconos
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//otros
import { useContext } from 'react';
import { Link } from 'react-router-dom';

//componentes personalizados
import { CartContext } from '../../context/CartContext';

//tomo la cantidad de items del context
const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      {/* para poner un tooltip tengo que englobar el icono que quiero tooltipear */}
      <Link
        to='/cart'
        className='cartWidget'
      >
        <Tooltip
          title='View cart'
          arrow
        >
          <IconButton
            sx={{
              color: { xs: 'primary', sm: 'white' },
            }}
          >
            <Badge
              badgeContent={cartQuantity()}
              color='secondary'
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Tooltip>
      </Link>
    </>
  );
};
export default CartWidget;
