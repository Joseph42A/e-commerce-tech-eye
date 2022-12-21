import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import CustomImageLazy from "./CustomImageLazy";

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
    <section className="my-5">
      <h2 className="text-2xl font-bold">Discount</h2>
      <div className="bg-black h-[2px] my-2" />

      <div className="new-arrival">
        {data.map((item) => (
          <div key={item.id} className="shadow-lg">
            <CustomImageLazy
              src={`https://fronttask.techeyeco.com${item.attachment.replace(
                /\\\\/g,
                "/"
              )}`}
              name={item.name}
            />

            <div className="p-3">
              <h3>{item.name}</h3>
              <p className="font-bold ">${item.price}</p>
              <p className="font-bold text-lg">{item.discount}% off</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Discount;
