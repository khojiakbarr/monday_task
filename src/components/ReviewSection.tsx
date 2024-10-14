import React, { useEffect, useState } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
import ReviewCard from "./ReviewCard/ReviewCard";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper/types/swiper-class";
import "swiper/css";
import axios from "axios";

export interface CommentProps {
  id: number;
  postId: number;
  name: string;
  body: string;
}

const ReviewSection: React.FC = () => {
  const [comments, setComments] = useState<CommentProps[]>();
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const fechtComments = async () => {
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(response.data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    fechtComments();
  }, []);

  return (
    <section className="bg-[#f5474a14] font-outfit mt-[100px] ">
      <div className="container">
        <div className="flex justify-between pt-[50px]">
          <h2 className="text-[40px] text-[#241415] font-bold md:text-[20px] ">
            What our customer say about this
          </h2>
          <div className="flex gap-4 items-center">
            <button
              className="bg_second_red p-[13px] rounded-full "
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaChevronLeft />
            </button>
            <button
              className="bg_red p-[13px] rounded-full text-white "
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>

        <div className="flex gap-5 py-8">
          <Swiper
            onSwiper={(swiper: SwiperClass) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {comments &&
              comments.map((comment) => (
                <SwiperSlide key={comment.id}>
                  <ReviewCard item={comment} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
