import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomImage from "./CustomImage";
import { ArrowRight, ArrowLeft } from "react-feather";
import CustomImageLazy from "./CustomImageLazy";

const ITEMS_PER_PAGE = 10;

const Products = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(ITEMS_PER_PAGE);

  const fetchData = ({ start, end }) => {
    axios
      .get(
        `https://fronttask.techeyeco.com/api/ClientSide/GetProducts?start=${start}&end=${end}`
      )
      .then(({ data }) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData({ start, end });
  }, [start, end]);

  const handlePrevClick = () => {
    if (start > 0) {
      setStart(start - ITEMS_PER_PAGE);
      setEnd(end - ITEMS_PER_PAGE);
    }
  };

  const handleNextClick = () => {
    setStart(start + ITEMS_PER_PAGE);
    setEnd(end + ITEMS_PER_PAGE);
  };

  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="bg-black h-[2px] my-2" />
      <div className="new-arrival">
        {data?.map((item) => (
          <div key={item.id} className="card shadow-lg">
            <CustomImage
              src={`https://fronttask.techeyeco.com${item.attachment.replace(
                /\\\\/g,
                "/"
              )}`}
              name={item.name}
            />
            <div className="p-3">
              <h3>{item.name}</h3>
              <p className="font-bold">${item.price}</p>
              {item.discount > 0 && <p>{item.discount}% off</p>}
            </div>
          </div>
        ))}

        {/* //**  Not Found attachment example  */}
        <div className="card shadow-lg">
          <CustomImageLazy
            src={`https://fronttask.techeyeco.com/testBug`}
            name="test"
          />
          <div className="p-3">
            <h3>Test(not found)</h3>
            <p className="font-bold">$10</p>
            <p>12% off</p>
          </div>
        </div>
      </div>
      <div className="pagination my-10">
        <button
          onClick={handlePrevClick}
          disabled={start === 0}
          className="bg-black text-white p-1 disabled:cursor-not-allowed"
        >
          <ArrowLeft />
        </button>
        {/* //! API must have total number returns to make pages pagination  */}
        {/* <span className="pagination-info">
          {" "}
          Page {Math.floor(start / ITEMS_PER_PAGE) + 1} of {totalPages}{" "}
        </span> */}

        <button
          onClick={handleNextClick}
          disabled={end >= data.total}
          className="bg-black text-white p-1 ml-3 disabled:cursor-not-allowed "
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Products;
