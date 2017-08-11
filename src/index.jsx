import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB6NTqak2o9YIyVkrP-GuFFG4bPCrkg5pE';

const App = () => {
	return (
		<div>
			Search <SearchBar />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

// document.addEventListener("DOMContentLoaded", () => {
// 	const root = document.getElementById("root");
// 	ReactDOM.render(<Congrats/>, root);
// });
