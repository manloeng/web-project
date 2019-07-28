import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Users from '../routes/Users';
import Topics from '../routes/Topics';

export default class App extends Component {
	state = {
		currentRoute: '/',
		data: null
	};

	handleRoute = (e) => {
		const { currentRoute } = this.state;
		this.setState({ currentRoute: e.url }, () => console.log(this.state, '<-----'));
	};

	componentDidMount() {
		const { currentRoute } = this.state;
		console.log(currentRoute, '<====');
		fetch(`http://localhost:9090/api${currentRoute}`)
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((responseJson) => {
				console.log(responseJson, 'json');
				this.setState({ data: responseJson }, () => {
					console.log(this.state);
				});
			});
	}

	// componentDidUpdate() {
	// 	const { currentRoute, prevRoute } = this.state;
	// 	if (currentRoute !== prevRoute) {
	// 		fetch(`http://localhost:9090/api${currentRoute}`).then((response) => response.json()).then((responseJson) => {
	// 			this.setState({ data: responseJson, prevRoute: currentRoute });
	// 		});
	// 	}
	// }

	render() {
		const { data } = this.state;
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" data={data} />
					<Users path="/users/" data={data} />
					{/* {topics && <Topics path="/topics/" topics={topics} />} */}
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
