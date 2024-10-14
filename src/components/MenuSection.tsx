import React from "react";
import MyCard from "./MyCard/MyCard";
import { useSelector } from "react-redux";
import { ProductItem } from "../store/reducers/reducers";

const MenuSection: React.FC = () => {
  const { products } = useSelector((state: any) => state.products);
  // console.log(productsItems);

  return (
    <div className="mt-[100px]  ">
      <div className="container relative ">
        <h2 className="font-bold text-[40px] text-[#241415] text-center md:text-[25px] sm:text-[20px] relative z-[-10]">
          Special Menu for you
        </h2>
        <p className="text-[#241415] text-[20px] text-center mt-[16px] md:text-[15px] md:mt-[10px] sm:mt-[5px] relative z-[-10]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum
          purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam
          condimentum.
        </p>
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mt-[50px] gap-[30px] justify-items-center md:mt-[25px] sm:mt-[20px]">
          {products.map((item: ProductItem) => (
            <MyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
