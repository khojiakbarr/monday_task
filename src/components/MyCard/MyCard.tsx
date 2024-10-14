import React from "react";
import MyButton from "../MyButton/MyButton";
import { ProductItem } from "../../store/reducers/reducers";
import { Link } from "react-router-dom";

interface MyCardProps {
  item: ProductItem;
}

const MyCard: React.FC<MyCardProps> = ({ item }) => {
  return (
    <div className="my_card flex flex-col shadow-[5px_5px_20px_0_rgba(36_20_21_0.08)] rounded-[20px] w-[262px] overflow-hidden lg:w-[240px] md:w-[200px] sm:w-[150px] font-poppins">
      <div className="h-[150px] sm:h-[100px]">
        <img
          src={item.url}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-[16px] sm:p-[8px]">
        <div className="flex flex-col">
          {/* row 1 */}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-[#241415] text-[18px] font-bold sm:text-[12px] sm:text-nowrap md:text-[14px]">
              {item.name}
            </h2>
            <div className="flex items-center sm:text-[12px] md:text-[14px]">
              <span>
                <img src="/red_star.svg" alt="star" />
              </span>
              <strong>5.0</strong>
            </div>
          </div>
          {/* row 2 */}
          <div className="flex justify-between mt-[10px] text-[14px] sm:text-[12px] sm:flex-col sm:items-start  md:flex-col md:items-start">
            <div className="flex items-center gap-[3px] ">
              <span>
                <img src="/deliver-mini.svg" alt="" />
              </span>
              <span>{item.price} UZS</span>
            </div>{" "}
            <div className="flex items-center gap-[3px]">
              <span>
                <img src="/svg-clock.svg" alt="" />
              </span>
              <span>25-30 min</span>
            </div>
          </div>

          <Link to={`edit/${item.id}`}>
            <MyButton
              className={
                "mt-[16px] w-full sm:py-[5px] sm:mt-[10px] md:py-[7px]"
              }
            >
              Edit
            </MyButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
