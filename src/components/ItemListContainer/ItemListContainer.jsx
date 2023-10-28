/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */
//materialUI
import { Grid } from '@mui/material';

//componentes personalizados
import ItemList from '../ItemList/ItemList';
import Title from '../Title/Title';
import Loader from '../Loader/Loader';

// Firestore
import { db } from '../../firebase/firebaseConfig';
import { collection, query, getDocs, orderBy, where } from 'firebase/firestore';

//otros
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  let { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let q; //la idea es que si viene all o vacio traiga todo ordenado por categoria, sino traigo la categoria
      if (categoryId == 'all' || !categoryId) {
        q = query(collection(db, 'products'), orderBy('categoryId'));
      } else {
        q = query(
          collection(db, 'products'),
          where('categoryId', '==', categoryId)
        );
      }
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push(doc.data()); //con esto lo traigo por defecto
      });
      setProducts(docs);
    };
    getProducts();
    setIsLoading(false);
  }, [categoryId]);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <Title title={categoryId ? categoryId.toUpperCase() : 'ALL'} />
        <Grid
          container
          className='ProductList'
          display='flex'
          justifyContent='center'
          spacing={3}
        >
          <ItemList products={products} />
        </Grid>
      </>
    );
  }
};
export default ItemListContainer;
