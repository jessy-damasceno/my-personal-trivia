import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './redux/store';
import './index.css';

const root = ReactDOM.createRoot(
	document.getElementById('root')
);

root.render(
	<BrowserRouter>
		<PersistGate loading={null} persistor={persistor}>
			<Provider store={store}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Provider>
		</PersistGate>
	</BrowserRouter>,
);
