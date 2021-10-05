import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../utils/styles'

export default function Layout({children}) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>Amazen</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazen</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        {children}
      </Container>
      <footer>
        <Typography>
          All rights for stu
        </Typography>
      </footer>
    </div>
  );
}
