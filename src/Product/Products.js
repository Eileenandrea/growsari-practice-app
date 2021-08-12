import { Product_data_list } from "./productDataList";
import { Container, Button } from "react-bootstrap";
import ProductItem from "./ProductItem";
function Products(props) {
	const product_data_lists = Product_data_list;
	const addToCartHandler = (product) => {
		props.onAppAddToCart(product);
	};
	return (
		<Container>
			<div className="row">
				<h1>Product Lists</h1>
				{product_data_lists.map((item) => (
					<ProductItem
						onAddToCart={addToCartHandler}
						data={item}
						key={item.id}
					/>
				))}
			</div>
		</Container>
	);
}

export default Products;
