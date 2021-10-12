import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Login() {
  const classes = useStyles();
  return (
    <Layout title="Login">
      <form className={classes.form}>
        <Typography component="h1" variant="h1" align="center">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              inputProps={{ type: 'email' }}
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: 'password' }}
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don't have an account? &nbsp;{' '}
            <NextLink href="/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
