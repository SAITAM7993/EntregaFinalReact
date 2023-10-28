//materialUI
import {
  Typography,
  ImageList,
  ImageListItem,
  Grid,
  Button,
} from '@mui/material';
//iconos
import HomeIcon from '@mui/icons-material/Home';

//otros
import { Link } from 'react-router-dom';

//componentes personalizados
import ItemActions from '../ItemActions/ItemActions';
import Title from '.././Title/Title.jsx';

const ItemDetail = ({ product }) => {
  return (
    <>
      <Title title={product.title}></Title>
      <Grid
        container
        spacing={3}
        direction='column'
        alignItems='left'
        justifyContent='center'
      >
        <Grid item>
          <Typography
            variant='body1'
            color='initial'
          >
            {product.description}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='body1'
            component='p'
            color={product.stock == 0 ? 'error' : null}
          >
            {product.stock != 0 ? `Stock : ${product.stock}` : 'Out of stock'}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='h4'
            color='initial'
            component='p'
          >
            ${product.price}
          </Typography>
        </Grid>
        <Grid item>
          <ImageList cols={3}>
            {/* con este op ternario espero a que cargue la img y luego la renderizo, sino rompia  */}
            {product.images &&
              product.images.map((image) => (
                <ImageListItem key={image}>
                  <img
                    src={image}
                    alt={product.title}
                  ></img>
                </ImageListItem>
              ))}
          </ImageList>
        </Grid>

        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
          my={5}
        >
          <Grid item>
            <ItemActions
              id={product.id}
              title={product.title}
              price={product.price}
              stock={product.stock}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item>
            <Link
              to='/category/all'
              className='customLink'
            >
              <Button
                variant='outlined'
                size='small'
                color='primary'
                sx={{
                  boxShadow: 'none',
                }}
                startIcon={<HomeIcon />}
              >
                Back to home
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ItemDetail;
