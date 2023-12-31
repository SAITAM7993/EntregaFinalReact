//css
import './ItemActions.css';

//materialUI
import { Button, Typography, Stack } from '@mui/material';

//iconos
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//componentes personalizados
import { CartContext } from '../../context/CartContext';

//otros
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

const ItemActions = ({ id, title, price, stock }) => {
  const initial = 1; //1
  const [quantity, setQuantity] = useState(initial);
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
    //armo el objeto para el carrito
    const item = {
      id,
      title,
      price,
      quantity,
    };
    addItem(item, quantity);
    //le paso el item y la cantidad
  };

  const increment = () => {
    //si la cantidad es menor a la del stock le dejo agregar
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    //si cantidad es mayor a uno le resto uno
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      {/* muestro la cantidad seleccionada */}

      <Stack
        direction='row'
        useFlexGap
        flexWrap='wrap'
        alignItems='center'
        spacing={{ xs: 1, xl: 2 }}
      >
        <Button
          variant='contained'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          size='small'
          onClick={decrement}
          disabled={!stock}
        >
          -
        </Button>
        <Typography
          variant='h6'
          color='secondary'
          align='center'
          sx={{ flexGrow: 1 }}
          component='p'
          mx={1}
        >
          {quantity}
        </Typography>
        <Button
          className='actionButton'
          variant='contained'
          size='small'
          disabled={!stock}
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          onClick={increment}
        >
          +
        </Button>
        <Button
          variant='outlined'
          size='small'
          color='primary'
          sx={{ boxShadow: 'none', flexGrow: 1 }}
          onClick={() => {
            handleOnAdd(quantity);
          }}
          disabled={!stock}
          startIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>
        <Link
          to='/cart'
          className={!stock ? 'disableLink' : null}
          onClick={() => {
            handleOnAdd(quantity);
          }}
        >
          <Button
            variant='contained'
            size='small'
            color='primary'
            sx={{ boxShadow: 'none', flexGrow: 1 }}
            disabled={!stock}
            startIcon={<ShoppingCartIcon />}
          >
            BUY NOW
          </Button>
        </Link>
      </Stack>
      {/* agregar al carrito, va a ejecutar como callback la funcion recibida por prop y se le pasa cmo argumento la cantidad, en caso de no tener stock lo deshabilita con disabled !stock  */}
    </>
  );
};
//NOTA: flexGrow para que ocupe todo el ancho
export default ItemActions;
