//materialUI
import {
  Button,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

//iconos
import ClearIcon from '@mui/icons-material/Clear';
import PaidIcon from '@mui/icons-material/Paid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
//otros
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

//componentes personalizados
import { CartContext } from '../../context/CartContext';
import Title from '../Title/Title';
import NoItemsInCart from '../NoItemsInCart/NoItemsInCart';

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const { cart, cartQuantity, cartTotal, clearCart, removeItem } =
    useContext(CartContext);

  useEffect(() => {
    setCartProducts(cart);
  }, [cart]);

  if (cartQuantity() === 0) {
    return <NoItemsInCart />;
  }

  return (
    <>
      <Title title='CART' />
      <TableContainer>
        <Table
          align='center'
          sx={{ minWidth: 700 }}
          aria-label='simple table'
        >
          <TableHead>
            <TableRow align='left'>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>SubTotal</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((p) => (
              <TableRow
                align='left'
                key={p.id}
              >
                <TableCell>{p.title}</TableCell>
                <TableCell>{p.quantity}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.price * p.quantity}</TableCell>
                <TableCell align='right'>
                  <Button
                    key={p.id + '-cartItemButton'}
                    variant='text'
                    sx={{ boxShadow: 'none' }}
                    size='small'
                    startIcon={<ClearIcon />}
                    onClick={() => removeItem(p.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        my={1}
        container
        spacing={2}
        display='flex'
        direction='column'
        justifyContent='center'
      >
        <Grid
          item
          my={3}
          lg={12}
        >
          <Typography
            variant='h5'
            color='initial'
            align='right'
          >
            TOTAL ${cartTotal()}
          </Typography>
        </Grid>

        <Grid
          item
          lg={12}
          display='flex'
          justifyContent='right'
        >
          <Button
            variant='outlined'
            size='medium'
            color='primary'
            sx={{ boxShadow: 'none' }}
            onClick={() => clearCart()}
            startIcon={<DeleteForeverIcon />}
          >
            Clear cart
          </Button>
          <Link
            to='/category/all'
            className='customLink'
          >
            <Button
              variant='outlined'
              size='medium'
              color='primary'
              sx={{
                boxShadow: 'none',
                marginLeft: 2,
              }}
              startIcon={<HomeIcon />}
            >
              Back to home
            </Button>
          </Link>
          <Link
            to='/checkout'
            className='customLink'
          >
            <Button
              variant='contained'
              size='meidum'
              color='primary'
              sx={{
                boxShadow: 'none',
                marginLeft: 2,
              }}
              startIcon={<PaidIcon />}
            >
              Check Out
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
export default Cart;
