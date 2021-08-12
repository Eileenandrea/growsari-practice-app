import logo from "./logo.svg";
import "./App.css";
import Cart from "./Cart/Cart";
import Products from "./Product/Products";
import { Route, Link } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={Products}></Route>
			<Route exact path="/cart" component={Cart}></Route>
		</div>
	);
}

export default App;
