import React from "react";

const Categories = ({ data }) => {
  const { categoryName } = data;
  return (
    <>
      <div className=" ">
        <div
          className=" border-2  text-white bg-[url('/public/banner2.jpg')] bg-cover
         grid place-content-center md:max-w-[260px] md:mx-auto    text-3xl font-serif font-extrabold"
        >
          <div className="flex justify-around  w-[800px] h-[200px] items-center text-center gap-10">
            {categoryName}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
