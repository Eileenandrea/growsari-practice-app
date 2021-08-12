import { Card, Button, ListGroup } from "react-bootstrap";
import ProductImages from "../assets/ProductImages";
import "./CartItem.scss";
import React, { useState } from "react";

function CartItem(props) {
	const [inputQty, setInputQty] = useState(props.data.Qty);
	const plusInputQtyHandler = () => {
		setInputQty((prevState) => {
			return prevState + 1;
		});
		const cart_product = { ...props.data, Qty: inputQty + 1 };
		props.onEditCart(cart_product);
	};
	const minusInputQtyHandler = () => {
		setInputQty((prevState) => {
			if (prevState) {
				const cart_product = { ...props.data, Qty: inputQty - 1 };
				props.onEditCart(cart_product);
				return prevState - 1;
			} else {
				const cart_product = { ...props.data, Qty: inputQty + 1 };
				props.onEditCart(cart_product);

				return prevState;
			}
		});
	};
	const changeInputQtyHandler = (e) => {
		const cart_product = { ...props.data, Qty: e.target.value };
		props.onEditCart(cart_product);
		setInputQty(e.target.value);
	};

	return (
		<div className="cart-items flex">
			<div className="product-image">
				<ProductImages category={props.data.category} />
			</div>

			<div className="product-details">
				<p className="product-details__name">{props.data.display_name}</p>
				<p>{props.data.brand}</p>
				<p>{props.data.category}</p>
			</div>
			<div className="product-details__price">
				₱{props.data.price * inputQty}
			</div>
			<div>
				<div className="number product-details__qty">
					<span className="minus" onClick={minusInputQtyHandler}>
						-
					</span>
					<input
						type="text"
						value={inputQty}
						onChange={changeInputQtyHandler}
						min="0"
						step="1"
					/>
					<span className="plus" onClick={plusInputQtyHandler}>
						+
					</span>
				</div>
			</div>
		</div>
	);
}
export default CartItem;
