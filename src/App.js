import logo from "./logo.svg";
import "./App.scss";
import Cart from "./Cart/Cart";
import Products from "./Product/Products";
import { Route, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
	let cartProducts = [];
	const init = () => {
		const storage = localStorage.getItem("cartItems");
		if (storage) cartProducts = JSON.parse(storage);
	};
	const getCartItems = () => {
		cartProducts = localStorage.getItem("cartItems");
	};

	init();
	const [cartItems, SetCartItems] = useState(cartProducts);

	const updateItemsToCart = (newproduct) => {
		if (cartProducts.find((product) => product.id == newproduct.id)) {
			const product_obj = cartProducts.find(
				(product) => product.id == newproduct.id
			);
			product_obj.Qty += newproduct.Qty;
		} else {
			cartProducts.push(newproduct);
		}
		localStorage.setItem("cartItems", JSON.stringify(cartProducts));
		SetCartItems(cartProducts);
		console.log(cartItems);
	};

	const addToCartHandler = (product) => {
		console.log("On App.js");
		updateItemsToCart(product);
	};
	const editCartHandler = (product) => {
		console.log("On App.js");
		const product_obj = cartProducts.find(
			(cart_product) => cart_product.id == product.id
		);
		product_obj.Qty = product.Qty;
		localStorage.setItem("cartItems", JSON.stringify(cartProducts));
		SetCartItems(cartProducts);
	};
	return (
		<div className="App">
			<Navbar expand="lg" variant="light" bg="light">
				<Container>
					<Navbar.Brand href="/">
						<img src={logo} className="app-logo" />
					</Navbar.Brand>
					<div>
						<Link className="link" to="/cart">
							<i className="fa fa-cart-plus" aria-hidden="true"></i>
						</Link>
					</div>
				</Container>
			</Navbar>

			<Route exact path="/" component={Products}>
				<Products onAppAddToCart={addToCartHandler} />
			</Route>
			<Route exact path="/cart" component={Cart}>
				<Cart onAppEditCart={editCartHandler} cartItems={cartItems}></Cart>
			</Route>
		</div>
	);
}

export default App;
