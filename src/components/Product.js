// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CustomImage from "./CustomImage";
// import { ArrowRight, ArrowLeft } from "react-feather";
// import CustomImageLazy from "./CustomImageLazy";

// const ITEMS_PER_PAGE = 10;

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [start, setStart] = useState(0);
//   const [end, setEnd] = useState(100);

//   const fetchData = ({ start, end }) => {
//     axios
//       .get(
//         `https://fronttask.techeyeco.com/api/ClientSide/GetProducts?start=${start}&end=${end}`
//       )
//       .then(({ data }) => {
//         setData(data);
//       });
//   };

//   useEffect(() => {
//     fetchData({ start, end });
//   }, [start, end]);

//   const handlePrevClick = () => {
//     if (start > 0) {
//       setStart(start - ITEMS_PER_PAGE);
//       setEnd(end - ITEMS_PER_PAGE);
//     }
//   };

//   const handleNextClick = () => {
//     setStart(start + ITEMS_PER_PAGE);
//     setEnd(end + ITEMS_PER_PAGE);
//   };

//   return (
//     <div className="my-16">
//       <h2 className="text-2xl font-bold">Products</h2>
//       <div className="bg-black h-[2px] my-2" />
//       <div className="new-arrival">
//         {data?.map((item) => (
//           <div key={item.id} className="card shadow-lg">
//             <CustomImage
//               src={`https://fronttask.techeyeco.com${item.attachment.replace(
//                 /\\\\/g,
//                 "/"
//               )}`}
//               name={item.name}
//             />
//             <div className="p-3">
//               <h3>{item.name}</h3>
//               <p className="font-bold">${item.price}</p>
//               {item.discount > 0 && <p>{item.discount}% off</p>}
//             </div>
//           </div>
//         ))}

//         {/* //**  Not Found attachment example  */}
//         <div className="card shadow-lg">
//           <CustomImageLazy
//             src={`https://fronttask.techeyeco.com/testBug`}
//             name="test"
//           />
//           <div className="p-3">
//             <h3>Test(not found)</h3>
//             <p className="font-bold">$10</p>
//             <p>12% off</p>
//           </div>
//         </div>
//       </div>
//       <div className="pagination my-10">
//         <button
//           onClick={handlePrevClick}
//           disabled={start === 0}
//           className="bg-black text-white p-1 disabled:cursor-not-allowed"
//         >
//           <ArrowLeft />
//         </button>

//         <button
//           onClick={handleNextClick}
//           disabled={end >= data.total}
//           className="bg-black text-white p-1 ml-3 disabled:cursor-not-allowed "
//         >
//           <ArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import CustomImage from "./CustomImage";
import ReactPaginate from "react-paginate";
import { ArrowRight, ArrowLeft } from "react-feather";
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
    <div className="my-16">
      <h2 className="text-2xl font-bold">Products</h2>
      <div className="bg-black h-[2px] my-2" />
      <div className="new-arrival">
        {currentItems?.map((item) => (
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
        {/* <div className="card shadow-lg">
          <CustomImageLazy
            src={`https://fronttask.techeyeco.com/testBug`}
            name="test"
          />
          <div className="p-3">
            <h3>Test(not found)</h3>
            <p className="font-bold">$10</p>
            <p>12% off</p>
          </div>
        </div> */}
      </div>
      <div className="pagination my-10">
        {/* <Pagination
          pageCount={Math.ceil(data.length / ITEMS_PER_PAGE)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          forcePage={page - 1}
        /> */}
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
