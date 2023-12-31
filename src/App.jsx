//fuentes
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//mi tema personalizado
import theme from './theme/theme';

//css
import './App.css';

//componentes mui
import { Container, ThemeProvider } from '@mui/material'; //de esta manera puedo importar varios a la vez

//componentes personalizados
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CheckOut from './components/CheckOut/CheckOut';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './components/Views/About/About';
import Cart from './components/Cart/Cart';

//importo context
import { CartProvider } from './context/CartContext';

//REACT ROUTER DOM //con el as renombro con un alias
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        {/* <ItemsProvider> */}
        <CartProvider>
          <ThemeProvider theme={theme}>
            {/*para importar un tema necesito esto y envolver todo lo que quiera con ese tema, theme es el nombre de mi tema*/}
            <NavBar />
            <Header
              title={'F-STORE'}
              subtitle={'All you need in one place'}
            />
            <Container maxWidth='lg'>
              <Routes>
                <Route
                  path='/'
                  element={<ItemListContainer />}
                />

                <Route
                  path='/category/:categoryId'
                  element={<ItemListContainer />}
                />
                <Route
                  path='/item/:id'
                  element={<ItemDetailContainer />}
                />
                <Route
                  path='/cart'
                  element={<Cart />}
                />
                <Route
                  path='/checkout'
                  element={<CheckOut />}
                />
                <Route
                  path='/about'
                  element={<About />}
                />
              </Routes>
            </Container>
          </ThemeProvider>
        </CartProvider>
        {/* con esto puedo usar el context de cart en toda la app */}
      </Router>
      <Footer />
    </>
  );
};
//nota1 a un componente mui le puedo pasar la prop sx para darle estilos css, ej sx={border: 3, borderStyle: "solid"}}
//nota2 en jsx no se puede usar - en las props por eso se usa camelCase
//nota3 typography es para manejar textos, se le pasa props para cambiar el comportamiento, por defecto se comporta como parrafo
//nota4 tambien puedo renderizar por ej un h2 con estilo de h1 ej  <Typography variant ="h1" component = "h2">
//nota5 ver systemProps que se pueden usar en typography o box por ej
//nota6 al boton le puedo pasar la prop startIcon={<DeleteIcon />} y dentro el icono que quiera como componente
/*nota7 
import { Button } from "@mui/material";
import Button from "@mui/material/Button"; //segun video si se importa de esta manera y no la anterior hace que se cargue mas rapido
;*/
export default App;
