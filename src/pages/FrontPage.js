import SliderComponent from "components/SliderComponent";
import NewArrivals from "components/NewArrivals";
import Discount from "components/Discount";
import Products from "components/Product";

function FrontPage() {
  return (
    <div className="w-[90%] mx-auto ">
      <SliderComponent />
      <NewArrivals />
      <Discount />
      <Products />
    </div>
  );
}

export default FrontPage;
