import NewArrivals from "components/NewArrivals";
import Discount from "components/Discount";
import Products from "components/Product";
import ProductSlider from "components/ProductSlider";

function FrontPage() {
  return (
    <div className=" mx-auto ">
      <ProductSlider />
      <NewArrivals />
      <Discount />
      <Products />
    </div>
  );
}

export default FrontPage;
