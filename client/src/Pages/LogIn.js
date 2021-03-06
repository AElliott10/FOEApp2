import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import API from "../ClientRoutes/API";
import clientAuth from '../ClientRoutes/clientAuth';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class LogIn extends React.Component{
  //const classes = useStyles();

  //Create STATE HERE!!!!
  constructor() {
		super();
    this.state = {
      userName: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  };

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    clientAuth.userLogin({ email, password })
      .then((result) =>
      {
        clientAuth.populateLocalStorage(result.data);
        this.setState({ message: '' });
        window.location.replace('/');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.setState({ message: 'Login failed. username or password does not match' });
        }
      });
  };
  
  render() {
//replaced all classes with useStyles
    const { email, password } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={useStyles.paper}>
          <Avatar className={useStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please sign in
        </Typography>
          <form className="form-signin" onSubmit={this.onSubmit}>
            <TextField
              onChange={this.onChange}
              id="outlined-password-input"
              //id="email"
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              value={email}
              autoComplete="current-email"
              autoFocus
              required

            />
            <TextField
              id="outlined-password-input"
              //id="password"
              onChange={this.onChange}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={useStyles.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="/AccountForm" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default LogIn;