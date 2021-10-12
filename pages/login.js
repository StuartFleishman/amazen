import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import axios from 'axios';

export default function Login() {
  onst [email, setEmail] = useState('')
  const classes = useStyles();
  const submitHandler = async (e) => {
    e.preventDefault()
    const {data} = await axios.post('/api/users/login', {email, password})
  }
  return (
    <Layout title="Login">
      <form onSubmit={submitHandler} className={classes.form}>
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
