import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import CustomImageLazy from "./CustomImageLazy";
import { priceAfterDiscount } from "utils";

const Discount = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=Discount"
      )
      .then((response) => setData(response.data));
  }, []);

  return (
    <section className="my-5 bg-slate-200 p-5 py-14">
      <div className="w-[90%] mx-auto">
        <div>
          <h2 className="text-4xl font-bold">Discount</h2>
          <div>
            Don't miss out on our amazing discounts on clothing! From stylish
            tops and dresses to comfortable jeans and pants, we've got
            everything you need to stay fashionable while saving money. Shop our
            discounted clothing selection now to find your new favorites at
            unbeatable prices.
          </div>
          {/* <div className="bg-black h-[2px] my-2" /> */}
        </div>
        <div className="new-arrival">
          {data.map((item) => (
            <div key={item.id} className="shadow-lg  rounded-lg">
              <CustomImageLazy
                src={`https://fronttask.techeyeco.com${item.attachment.replace(
                  /\\\\/g,
                  "/"
                )}`}
                name={item.name}
                className=" rounded-lg shadow-md h-[300px] w-full"
              />

              <div className="p-5 flex justify-between flex-col">
                <h3 className="font-bold text-xl">{item.name}</h3>
                <div className="mt-2 w-fit p-1 px-2 uppercase transition text-[#007bff] border-[1px] font-bold border-gray-300 rounded">
                  {item.brandName}
                </div>
                <div className="my-2">
                  <span className="font-bold text-2xl">
                    ${priceAfterDiscount(item.price, item.discount)}
                  </span>
                  <span className="line-through font-bold text-gray-500 ml-1">
                    ${item.price}
                  </span>
                  <span className="font-bold ml-1 text-[#28a745]">
                    {item.discount}% off
                  </span>
                </div>
                <button className="p-1 py-[1px] transition w-fit text-[#007bff] border border-[#007bff] rounded mt-1 hover:bg-[#007bff] hover:text-white">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discount;
