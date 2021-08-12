import logo from "./logo.svg";
import "./App.scss";
import Cart from "./Cart/Cart";
import Products from "./Product/Products";
import { Route, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { product } from "prelude-ls";

function App() {
	const cartProducts = [];
	const [cartItems, SetCartItems] = useState(cartProducts);
	const init = () => {
		const storage = localStorage.getItem("cartItems");
		if (storage) cartProducts = JSON.parse(storage);
	};
	const getCartItems = () => {
		cartProducts = localStorage.getItem("cartItems");
	};

	const updateItemsToCart = (newproduct) => {
		if (cartProducts.find((product) => product.id == newproduct.id)) {
			console.log(cartProducts);
			const product_obj = cartProducts.find(
				(product) => product.id == newproduct.id
			);
			product_obj.Qty += newproduct.Qty;
		} else {
			cartProducts.push(newproduct);
		}
		localStorage.setItem("cartItems", JSON.stringify(cartProducts));
	};

	const addToCartHandler = (product) => {
		console.log("On App.js");
		updateItemsToCart(product);
	};
	return (
		<div className="App">
			<Navbar expand="lg" variant="light" bg="light">
				<Container>
					<Navbar.Brand href="#">
						<img src={logo} className="app-logo" />
					</Navbar.Brand>
				</Container>
			</Navbar>

			<Route exact path="/" component={Products}>
				<Products onAppAddToCart={addToCartHandler} />
			</Route>
			<Route exact path="/cart" component={Cart}></Route>
		</div>
	);
}

export default App;
