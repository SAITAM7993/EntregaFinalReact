//materialUI
import {
  Box,
  List,
  ListItemText,
  ListItem,
  ListItemButton,
  ListItemIcon,
  IconButton,
} from '@mui/material';

//componentes personalizados
import CartWidget from '../CartWidget/CartWidget';

const NavListDrawer = ({ navLinks }) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          <ListItem
            disablePadding
            key='CartWidget'
          >
            <ListItemButton>
              <ListItemIcon>
                <CartWidget /> {/* icono para cerrar */}
              </ListItemIcon>
              <ListItemText>CART</ListItemText>
            </ListItemButton>
          </ListItem>
          {navLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <ListItemButton
                component='a'
                href={item.path}
              >
                <ListItemIcon>
                  <IconButton>{item.icon}</IconButton>
                </ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          {/* como el cartwidget lo tengo como iconbutton para que quede todo igual tengo que agregarle iconbutton a los listitemicon */}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
