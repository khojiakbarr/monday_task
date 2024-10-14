import React from "react";
interface ReviewCardProps {
  item: any;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ item }) => {
  return (
    <div className="rounded-[20px] bg-white w-[320px] h-[360px] p-[30px] flex flex-col justify-between md:p-[20px] lg:p-[20px] lg:w-[260px] md:max-w-[240px] md:h-[450px] sm:w-full">
      <div>
        <img src="/stars.png" alt="stars" />
      </div>
      <p className="teext-[14px]">“{item.body}”</p>
      <div className="flex gap-[10px] md:flex-col">
        {/* <img className="w-[50px]" src="/avatar.svg" alt="" /> */}
        <div>
          <h4>{item.name}</h4>
          <h5>{item.email}</h5>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
