import logo from "./Logo.svg";
import "./App.scss";
import Cart from "./Cart/Cart";
import Products from "./Product/Products";
import { Route, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Navbar expand="lg" variant="light" bg="light">
				<Container>
					<Navbar.Brand href="#">
						<img src={logo} className="app-logo" />
					</Navbar.Brand>
				</Container>
			</Navbar>

			<Route exact path="/" component={Products}></Route>
			<Route exact path="/cart" component={Cart}></Route>
		</div>
	);
}

export default App;
