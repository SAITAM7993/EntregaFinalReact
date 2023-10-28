//materialUI
import { Grid } from '@mui/material';

//componentes personalizados
import ItemCard from '../ItemCard/ItemCard';

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Grid
            item
            display='flex'
            justify='center'
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={product.id}
          >
            <ItemCard
              id={product.id}
              title={product.title}
              image={product.images[0]}
              price={product.price}
              category={product.categoryId}
              description={product.description}
              stock={product.stock}
            />
          </Grid>
        );
      })}
    </>
  );
};
export default ItemList;
