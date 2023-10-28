//materialUI
import { Box, Typography, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
const NoItemsInCart = () => {
  return (
    <>
      <Box
        display='flex'
        direction='row'
        justifyContent='center'
        alignItems='center'
        p={'10%'}
        sx={{
          width: '100%',
        }}
      >
        <Typography
          variant='h5'
          color='initial'
          align='center'
        >
          No items in cart
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
                width: '100%',
              }}
              startIcon={<HomeIcon />}
            >
              Back to home
            </Button>
          </Link>
        </Typography>
      </Box>
    </>
  );
};
export default NoItemsInCart;
