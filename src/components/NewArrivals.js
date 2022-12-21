import { useEffect, useState } from "react";
import axios from "axios";
import EmptyImg from "assets/images/emptyImg.jpg";
import CustomImage from "./CustomImage";
import CustomImageLazy from "./CustomImageLazy";

const NewArrivals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fronttask.techeyeco.com/api/ClientSide/GetCurrentGroupProducts?GroupProductType=NewArrivals"
      )
      .then((response) => setData(response.data));
  }, []);

  return (
    <section className="my-[5rem]">
      <h2 className="text-2xl font-bold">New Arrivals</h2>
      <div className="bg-black h-[2px] my-2" />
      <div className="new-arrival">
        {data.map((item, index) => (
          //! item.id -> Repeated id exist ! 2318
          <div key={index} className="shadow-lg">
            <CustomImageLazy
              src={`https://fronttask.techeyeco.com${item.attachment.replace(
                /\\\\/g,
                "/"
              )}`}
              name={item.name}
            />
            <div className="p-3">
              <h3>{item.name}</h3>
              <p className="font-bold">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
