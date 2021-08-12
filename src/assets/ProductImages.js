import Alcohol from "./images/Alcohol.png";
import BathAndBodyCare from "./images/BathAndBodyCare.jpg";
import BreadAndBiscuits from "./images/BreadAndBiscuits.jpg";
import CandiesAndChocolates from "./images/CandiesAndChocolates.png";
import CannedSeafoods from "./images/CannedSeafood.jpg";
import Chips from "./images/Chips.png";
import Cigarettes from "./images/Cigarettes.jpg";
import Coffee from "./images/Coffee.jpg";
import CondimentsAndSpices from "./images/CondimentsAndSpices.jpg";
import Diaper from "./images/Diaper.jpg";
import HairCare from "./images/HairCare.jpg";
import LaundryProducts from "./images/LaundryProducts.jpg";
import Milk from "./images/Milk.png";
import Nuts from "./images/Nuts.jpg";
import OilAndSauces from "./images/OilAndSauces.jpg";
import OralCare from "./images/OralCare.jpg";
import PackedMeat from "./images/PackedMeat.jpg";
import RiceAndNoodles from "./images/RiceAndNoodles.jpg";
import RTD from "./images/RTD.jpg";
import SeasoningsAndMixes from "./images/SeasoningsAndMixes.png";
import Softdrinks from "./images/Softdrinks.jpg";
import SportsDrinks from "./images/SportsDrinks.jpg";
import SpreadsAndDressings from "./images/SpreadAndDressings.jpg";
import Water from "./images/Water.png";
import NoImage from "./images/NoImage.png";
import FeminineCare from "./images/FemenineCare.jpg";
import CleaningProducts from "./images/CleaningProducts.jpg";
import PowderedJuice from "./images/PowderedJuice.jpg";
import { Card } from "react-bootstrap";

function ProductImages(props) {
	let productImage;
	switch (props.category) {
		case "Alcohol":
			productImage = Alcohol;
			break;
		case "Bath and Body Care":
			productImage = BathAndBodyCare;
			break;
		case "Bread and Biscuits":
			productImage = BreadAndBiscuits;
			break;
		case "Candies and Chocolates":
			productImage = CandiesAndChocolates;
			break;
		case "Canned Seafood":
			productImage = CannedSeafoods;
			break;
		case "Chips":
			productImage = Chips;
			break;
		case "Cigarettes":
			productImage = Cigarettes;
			break;
		case "Coffee":
			productImage = Coffee;
			break;
		case "Condiments and Spices":
			productImage = CondimentsAndSpices;
			break;
		case "Diapers":
			productImage = Diaper;
			break;
		case "Hair Care":
			productImage = HairCare;
			break;
		case "Laundry Products":
			productImage = LaundryProducts;
			break;
		case "Milk":
			productImage = Milk;
			break;
		case "Nuts":
			productImage = Nuts;
			break;
		case "Oil and Sauces":
			productImage = OilAndSauces;
			break;
		case "Oral Care":
			productImage = OralCare;
			break;
		case "Packed Meat":
			productImage = PackedMeat;
			break;
		case "Rice and Noodles":
			productImage = RiceAndNoodles;
			break;
		case "RTD":
			productImage = RTD;
			break;
		case "Seasonings and Mixes":
			productImage = SeasoningsAndMixes;
			break;
		case "Softdrinks":
			productImage = Softdrinks;
			break;
		case "Sports Drinks":
			productImage = SportsDrinks;
			break;
		case "Spreads and Dressings":
			productImage = SpreadsAndDressings;
			break;
		case "Water":
			productImage = Water;
			break;
		case "Feminine Care":
			productImage = FeminineCare;
			break;
		case "Cleaning Products":
			productImage = CleaningProducts;
			break;
		case "Powdered Drink":
			productImage = PowderedJuice;
			break;
		default:
			productImage = NoImage;
	}
	return (
		<div>
			<Card.Img variant="top" src={productImage} />
		</div>
	);
}
export default ProductImages;
