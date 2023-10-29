//css
import './NavBar.css';

//materialUI
import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from '@mui/material';

//iconos
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';

//otros
import { useState } from 'react';
import { Link } from 'react-router-dom';

//componentes personalizados
import NavListDrawer from './NavListDrawer';
import CartWidget from '../CartWidget/CartWidget';
import MenuList from '../MenuList/MenuList';

//lista de objetos link para user en el navlist
export const navLinks = [
  {
    title: 'ABOUT',
    icon: <InfoIcon />,
    path: '/about',
  },
];

//brand de la tienda
export const brand = 'F-STORE';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography
            variant='h6'
            sx={{ flexGrow: 1, display: 'flex' }}
          >
            <Link to='/'>
              {/* flexGrow 1 hace que el crecimiento sea el maximo posible, eso empuja todo el resto a la derecha */}
              {brand}
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', marginRight: 5 }}>
            <MenuList />
            {/* componente que trae las categorias desde firebase */}
          </Box>
          <Box sx={{ display: { sm: 'flex', xs: 'none' }, marginRight: 5 }}>
            {navLinks.map((item) => (
              <Link
                className='li'
                key={`${item.title}`}
                to={`${item.path}`}
              >{`${item.title}`}</Link>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <CartWidget />
          </Box>
          <IconButton>
            <MenuIcon
              sx={{
                color: 'white',
                display: { xs: 'flex', sm: 'none' },
              }}
              onClick={() => setOpen(true)}
            />
            {/* icono hamburguesa */}
          </IconButton>
        </Toolbar>
        {/* todo lo que se le ponga en toolbar va a ser con flex pegado uno al lado del otro*/}
      </AppBar>
      <Drawer
        open={open}
        anchor='left'
        onClose={() => setOpen(false)}
        sx={{ display: { xs: 'flex', lg: 'none' } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};
export default NavBar;
