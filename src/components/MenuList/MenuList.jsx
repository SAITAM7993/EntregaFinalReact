//css
import './MenuList.css';

//materialUI
import { Button, Menu, MenuItem, Fade } from '@mui/material';
import Typography from '@mui/material/Typography';

//otros
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Firestore
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';

export default function MenuList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const q = query(
        collection(db, 'categories'),
        orderBy('name')
        //con el orderBy traigo ordenado
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push(doc.data()); //con esto lo traigo por defecto
      });
      setCategories(docs);
    };
    getCategories();
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='fade-button'
        className='li'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography>CATEGORIES</Typography>
      </Button>
      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link
          className='menuItem'
          key='menuItem-All'
          to={'/category/all'}
        >
          <MenuItem
            className='menuItem'
            onClick={handleClose}
          >
            ALL
          </MenuItem>
        </Link>
        {categories.map((item) => (
          <Link
            className='menuItem'
            key={`menuItem-${item.name}`}
            to={`/category/${item.name.toLowerCase()}`}
          >
            <MenuItem
              className='menuItem'
              onClick={handleClose}
            >{`${item.name.toUpperCase()}`}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
