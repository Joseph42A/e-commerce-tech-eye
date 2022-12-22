import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { ArrowRight, ArrowLeft, Heart, Repeat } from "react-feather";
import CustomImageLazy from "./CustomImageLazy";

const ITEMS_PER_PAGE = 10;

const Products = () => {
  const [items, setItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(itemOffset + ITEMS_PER_PAGE);

  const currentItems = useMemo(
    () => items.slice(itemOffset, endOffset),
    [items, itemOffset, endOffset]
  );
  const pageCount = useMemo(
    () => Math.ceil(items.length / ITEMS_PER_PAGE),
    [items]
  );

  const fetchData = () => {
    axios
      .get(
        `https://fronttask.techeyeco.com/api/ClientSide/GetProducts?start=${0}&end=${100}`
      )
      .then(({ data }) => {
        setItems(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (event) => {
    const newOffset = (event.selected * ITEMS_PER_PAGE) % items.length;
    setItemOffset(newOffset);
    setEndOffset(newOffset + ITEMS_PER_PAGE);
  };

  return (
    <div className="my-16 w-[90%] mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Products</h2>
        <h6>
          Write a nice description about New Arrivals clothe products in
          e-commerce website in two sentence
        </h6>
      </div>
      <div className="new-arrival">
        {currentItems?.map((item) => (
          <div
            key={item.id}
            className="card shadow-lg rounded-lg relative pb-12"
          >
            <CustomImageLazy
              src={`https://fronttask.techeyeco.com${item.attachment.replace(
                /\\\\/g,
                "/"
              )}`}
              name={item.name}
              className="h-[300px] w-full object-cover"
            />
            <div className="p-3 text-center">
              <h3 className="font-bold text-2xl">{item.name}</h3>
              <p className="font-bold text-3xl text-[#c85757] my-3">
                ${item.price}
              </p>
            </div>
            <div className="absolute bottom-0 w-full  ">
              <button className="font-bold py-3 w-full transition h-full bg-slate-700 text-2xl text-white rounded-b-lg hover:bg-slate-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination my-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<ArrowRight />}
          previousLabel={<ArrowLeft />}
          onPageChange={handlePageChange}
          // pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          className="flex"
          activeLinkClassName="bg-gray-300 px-1 "
          disabledClassName="!cursor-not-allowed text-red-500 "
          pageLinkClassName="px-1"
        />
      </div>
    </div>
  );
};

export default Products;
