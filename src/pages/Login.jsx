import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Avatar, Button, Link, Paper, Box,
	CssBaseline, TextField, Grid, Typography
} from '@mui/material';
import { getToken } from '../redux/actions';
import Copyright from '../components/Copyright';

const regexEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

class Login extends Component {
	state = {
		name: '',
		email: '',
		isDisabled: false,
	};

	handleClick = () => {
		const { getTokenAction, history } = this.props;
		const { name, email } = this.state;
    
		getTokenAction(name, email);
		history.push('/create-game');
	};

	handleChange = ({target}) => {
		const { name, value } = target;
		this.setState({ [name]: value });
	};

	render() {
		const { name, email } = this.state;
		let { isDisabled } = this.state;

		if (name.length >= 3 && email.match(regexEmail)) {
			isDisabled = true;
		}

		return (
			<Grid container component="main" sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid
					item
					xs={false}
					sm={5}
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
				<Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							width: 'auto',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'primary.light' }} />
						<Typography component="h1" variant="h5">
              Log in
						</Typography>
						<Box component="form" noValidate sx={{ mt: 1 }}>
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
								helperText="Your name or username"
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
								helperText="Enter a valid e-mail address"
								autoComplete="current-email"
							/>
							<Button
								type="button"
								color="primary"
								fullWidth
								variant="contained"
								onClick={ this.handleClick}
								disabled={ !isDisabled }
								sx={{ mt: 3, mb: 2 }}
							>
                Create a game!
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="https://br.gravatar.com/" target="_blank" rel="noreferrer" variant="body2">
                    Create a Gravatar here.
									</Link>
								</Grid>
							</Grid>
							<Copyright sx={{ mt: 5 }} />
						</Box>
					</Box>
				</Grid>
			</Grid>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	getTokenAction: (name, email) => dispatch(getToken(name, email)),
});

export default connect(null, mapDispatchToProps)(Login);
