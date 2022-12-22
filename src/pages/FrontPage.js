import SliderComponent from "components/SliderComponent";
import NewArrivals from "components/NewArrivals";
import Discount from "components/Discount";
import Products from "components/Product";
import ProductSlider from "components/ProductSlider";

function FrontPage() {
  return (
    <div className=" mx-auto ">
      <ProductSlider />
      <div className="w-[90%] mx-auto">
        <NewArrivals />
        <Discount />
        <Products />
      </div>
    </div>
  );
}

export default FrontPage;
