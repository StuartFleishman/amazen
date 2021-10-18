import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import axios from 'axios';
import { Store } from '../utils/Store';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


export default function Register() {
  const { dispatch, state } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  const { redirect } = router.query

  useEffect(() => {
    if (userInfo) {
      router.push('/');
    }
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const classes = useStyles();
  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmpassword){
      alert("password doesn't match")
    }
    try {
      const { data } = await axios.post('/api/users/register', {
        name,
        email,
        password,
      });
      dispatch({ type: 'USER_LOGIN', payload: data });
      Cookies.set('userInfo', data);
      router.push(redirect || '/')
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Layout title="Register">
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography component="h1" variant="h1" align="center">
          Register
        </Typography>
        <List>
          <ListItem>
            <TextField
              inputProps={{ type: 'text' }}
              variant="outlined"
              fullWidth
              id="name"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: 'email' }}
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: 'password' }}
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              inputProps={{ type: 'password' }}
              variant="outlined"
              fullWidth
              id="confirmPassword"
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Register
            </Button>
          </ListItem>
          <ListItem>
            Already have an account? &nbsp;{' '}
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
