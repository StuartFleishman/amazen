import { Button, List, ListItem, TextField, Typography } from '@material-ui/core'
import React from 'react'
import Layout from '../components/Layout'
import useStyles from '../utils/styles'

export default function Login() {
  const classes = useStyles()
  return (
    <Layout title="Login">
      <form className={classes.form}>
        <Typography component="h1" variant="h1" align="center">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField inputProps={{ type: 'email'}} variant="outlined" fullWidth id="email" label="Email">
            </TextField>
          </ListItem>
          <ListItem>
            <TextField inputProps={{ type: 'password'}} variant="outlined" fullWidth id="password" label="Password">
            </TextField>
          </ListItem>
          <ListItem>
            <Button></Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  )
}
