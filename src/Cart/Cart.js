import { Container, ListGroup } from "react-bootstrap";
import CartItem from "./CartItem";
function Cart(props) {
	console.log(props);
	const editCartHandler = (product) => {
		props.onAppEditCart(product);
	};
	return (
		<Container className="mt-5">
			<ListGroup variant="flush">
				{props.cartItems.map((item) => (
					<CartItem
						onEditCart={editCartHandler}
						data={item}
						key={item.id}
					/>
				))}
			</ListGroup>
		</Container>
	);
}

export default Cart;
