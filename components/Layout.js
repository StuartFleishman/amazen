import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Amazen</title>
      </Head>
      <AppBar position="static">
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
