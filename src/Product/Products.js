import { Product_data_list } from "./productDataList";
import { Container, Button } from "react-bootstrap";
import ProductItem from "./ProductItem";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import "./Product.scss";

function Products(props) {
	const [productList, setProductList] = useState(Product_data_list);

	const [pageNumber, setPageNumber] = useState(0);

	const productPerPage = 12;
	const pageVisited = pageNumber * productPerPage;

	const displayProduct = productList.slice(
		pageVisited,
		pageVisited + productPerPage
	);

	const addToCartHandler = (product) => {
		props.onAppAddToCart(product);
	};
	const pageCount = Math.ceil(Product_data_list.length / productPerPage);
	const changePage = ({ selected }) => {
		console.log(selected);
		setPageNumber(selected);
	};
	return (
		<Container>
			<div className="row">
				<h1>Product Lists</h1>
				{displayProduct.map((item) => (
					<ProductItem
						onAddToCart={addToCartHandler}
						data={item}
						key={item.id}
					/>
				))}
			</div>
			<div className="mt-5">
				<ReactPaginate
					previousLabel={"Previous"}
					nextLabel={"Next"}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={"paginationBttns"}
					previousLinkClassName={"previousBttn"}
					nextLinkClassName={"nextBttb"}
					disabledClassName={"paginationDisabled"}
					activeClassName={"paginationActive"}
				/>
			</div>
		</Container>
	);
}

export default Products;
