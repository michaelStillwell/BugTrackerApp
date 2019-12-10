import React from 'react';
import './App.css';

/**
 * TODO:
 *  - decide on a way to save the user's cookie to tell if a user is logged in
 */

import routes from './routes';

function App() {
	return (
		<div className="App">
			{routes}
		</div>
	);
}

export default App;
