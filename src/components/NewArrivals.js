import { useEffect, useState } from "react";
import axios from "axios";
import CustomImageLazy from "./CustomImageLazy";
import { Heart, Repeat } from "react-feather";

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
    <section className="my-[5rem] w-[90%] mx-auto">
      <h2 className="text-4xl font-bold text-center">New Arrivals</h2>
      <h6 className="text-center">
        Check out our latest clothing arrivals for the freshest styles and
        must-have pieces. Shop now!
      </h6>
      {/* <div className="bg-black h-[2px] my-2" /> */}
      <div className="new-arrival">
        {data.map((item, index) => (
          //! item.id -> Repeated id exist ! 2318
          <div key={index} className="relative pb-10 shadow-lg rounded-lg ">
            <CustomImageLazy
              src={`https://fronttask.techeyeco.com${item.attachment.replace(
                /\\\\/g,
                "/"
              )}`}
              name={item.name}
              className="h-[300px] w-full object-cover"
            />
            <div className="absolute top-3 left-0 p-1 px-3 font-bold bg-green-600 text-white">
              New
            </div>
            <div className="flex justify-between flex-col items-center text-center">
              <div className="p-5 ">
                <h3 className="font-bold text-2xl">{item.name}</h3>
                <p className="font-bold text-3xl text-[#c85757] my-3">
                  ${item.price}
                </p>
              </div>
              <div className="absolute bottom-0 flex justify-between items-center w-full rounded-lg border ">
                <div className="p-2">
                  <Repeat className="text-gray-300" size="20" />
                </div>
                <button className="font-bold py-3 w-full transition h-full hover:bg-[#c0c000] hover:text-white">
                  ADD TO CARD
                </button>
                <p className="p-2">
                  <Heart
                    className="text-gray-300 cursor-pointer transition hover:text-black hover:fill-black"
                    size="20"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
