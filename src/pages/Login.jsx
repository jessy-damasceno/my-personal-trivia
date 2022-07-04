import { Component } from 'react';
import {
  Avatar, Button, FormControlLabel, Checkbox, Link, Paper, Box,
  CssBaseline, TextField, Grid, Typography
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#9500ae',
      main: '#d500f9',
      dark: '#dd33fa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

class Login extends Component {
  state = {
    name: '',
    email: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
    });
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email } = this.state;

    return (
      <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://static.vecteezy.com/ti/vetor-gratis/p3/107544-illustrartion-de-texto-de-trivia-vetor.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.light' }} />
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                value={name}
                onChange={this.handleChange}
                label="Name"
                id="name"
                placeholder="Type your username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                value={email}
                onChange={this.handleChange}
                label="Email"
                type="text"
                id="email"
                placeholder="Type your e-mail"
                autoComplete="current-email"
              />
              <Button
                type="submit"
                color="primary"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Start play!
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="https://br.gravatar.com/" target="_blank" rel="noreferrer" variant="body2">
                    Create a Gravatar here.
                  </Link>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    );
  }
}

export default Login;
