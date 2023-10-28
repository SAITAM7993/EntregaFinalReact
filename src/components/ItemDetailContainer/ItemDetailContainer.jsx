/* Este componente llama a la api para obtener la lista de productos, llama a ItemList que carga las cards y los lista en una grilla */
//materialUI
import { Box } from '@mui/material';

//componentes personalizados
import ItemDetail from '../ItemDetail/ItemDetail';

// Firestore
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

//otros
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, 'products'),
        where('id', '==', parseInt(id)) //para filtrar por id de prod
      );
      let filteredProduct; //como filtro un producto declaro una variable que luego le cargo doc.data
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        filteredProduct = doc.data();
      });
      setProduct(filteredProduct);
    };
    getProduct();
  }, [id]);

  return (
    <>
      <Box>
        <ItemDetail product={product} />
      </Box>
    </>
  );
};

export default ItemDetailContainer;
