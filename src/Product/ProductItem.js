import { Card, Button } from "react-bootstrap";
import ProductImages from "../assets/ProductImages";
import "./ProductItem.css";
import React, { useState } from "react";
function ProductItem(props) {
	const [inputQty, setInputQty] = useState(0);
	const plusInputQtyHandler = () => {
		setInputQty((prevState) => {
			return prevState + 1;
		});
	};
	const minusInputQtyHandler = () => {
		setInputQty((prevState) => {
			if (prevState) {
				return prevState - 1;
			} else {
				return prevState;
			}
		});
	};
	const changeInputQtyHandler = (e) => {
		setInputQty(e.target.value);
	};
	const addToCartHandler = (event) => {
		event.preventDefault();
		const cart_product = { ...props.data, Qty: inputQty };
		props.onAddToCart(cart_product);
		setInputQty(0);
	};
	return (
		<Card
			className="col-3"
			style={{ width: "18rem" }}
			className="ps-0 pe-0 ms-3 mt-5"
		>
			<ProductImages category={props.data.category} />
			<Card.Body>
				<Card.Title>{props.data.display_name}</Card.Title>
				<Card.Text>{props.data.brand}</Card.Text>
				<Card.Text>{props.data.price}</Card.Text>
			</Card.Body>
			<Card.Footer className="pb-0 ps-0 pe-0">
				<form onSubmit={addToCartHandler}>
					<div className="number">
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
					<div className="d-grid gap-2">
						<Button
							type="submit"
							variant="primary"
							size="lg"
							className="mt-3"
						>
							Add to Cart
						</Button>
					</div>
				</form>
			</Card.Footer>
		</Card>
	);
}
export default ProductItem;
