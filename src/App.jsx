import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CreateGame from './pages/CreateGame';

export const theme = createTheme({
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

// const darkTheme = createTheme({
// 	palette: {
// 		mode: 'dark',
// 	},
// });

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Switch>
				<Route exact path="/" render={(props) => <Login {...props} />} />
				<Route exact path="/create-game" render={(props) => <CreateGame {...props} />} />
				<Route exact path="/game" render={(props) => <Game {...props} />} />
			</Switch>
		</ThemeProvider>
	);
}

export default App;
