import { Product_data_list } from "./productDataList";
import { Container } from "react-bootstrap";
import ProductItem from "./ProductItem";
function Products() {
	const product_data_lists = Product_data_list;
	return (
		<Container>
			<div className="row">
				<h1>Product Lists</h1>
				{product_data_lists.map((item) => (
					<ProductItem data={item} key={item.id} />
				))}
			</div>
		</Container>
	);
}

export default Products;
