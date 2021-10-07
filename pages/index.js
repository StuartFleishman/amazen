import Layout from '../components/Layout';
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  Grid,
  CardContent,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link'
import data from '../utils/data';

export default function Home() {
  console.log(data.products)
  return (
    <>
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
              <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
              </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
    </>
  );
}
