import { Grid, Typography, Link} from '@material-ui/core';
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import NextLink from 'next/link'
import { Store } from '../utils/Store';

export default function CartScreen() {
  const { state } = useContext(Store);
  const { cart: {cartItems} } = state;
  return (
    <Layout title="Shopping Cart">
      <Typography component="h1" variant="h1">
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty.{' '}
          <NextLink href="/" passHref>
            <Link>Go shopping</Link>
          </NextLink>
        </div>
      ) :  (
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            table of cart items
          </Grid>
          <Grid md={3} xs={12}>
            cart actions
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}
