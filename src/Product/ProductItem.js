import { Card } from "react-bootstrap";
import ProductImages from "../assets/ProductImages";
import "./ProductItem.css";
import React, { useState } from "react";
function ProductItem(props) {
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
		</Card>
	);
}
export default ProductItem;
