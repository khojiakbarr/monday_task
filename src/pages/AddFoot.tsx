import React from "react";
import Navbar from "../components/Navbar";
import MyButton from "../components/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addProduct } from "../store/actions";
import { ProductItem } from "../store/reducers/reducers";
import { uid } from "uid";

const AddFoot: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { products } = useSelector((state: any) => state.products);

  interface FormData {
    id: string; // ProductItem id
    url: string; // ProductItem url
    name: string; // ProductItem name
    price: number; // ProductItem price
  }

  const { handleSubmit, register, reset } = useForm<FormData>({
    defaultValues: {
      id: "",
      url: "",
      name: "",
      price: 0,
    },
  });

  const handleAddFood = (data: ProductItem) => {
    dispatch(addProduct({ ...data, id: uid() }));
    reset();
    navigate("/");
  };

  return (
    <section>
      <Navbar path={"add"} />

      <div className="container">
        <h1 className="text-[80px] text-[#141123] font-bold text-center mt-[63px] mb-[48px]">
          Add food
        </h1>
        <form
          onSubmit={handleSubmit((data) => handleAddFood(data))}
          className="flex flex-col gap-[20px] max-w-[600px] mx-auto"
        >
          <input
            type="text"
            placeholder="Mahsulot nomi"
            className="px-[15px] py-[12px] rounded-md border"
            required
            {...register("name")}
          />
          <input
            type="url"
            placeholder="Mahsulot rasmi urli"
            className="px-[15px] py-[12px] rounded-md border"
            required
            {...register("url")}
          />
          <input
            type="number"
            placeholder="Mahsulot narxi"
            className="px-[15px] py-[12px] rounded-md border"
            required
            {...register("price")}
          />
          <div className="w-full flex justify-stretch gap-3">
            <button
              onClick={() => navigate("/")}
              type="button"
              className={
                "bg-[#141123] rounded-[20px] py-[13px] px-[20px] text-[16px] font-normal text-white w-full"
              }
            >
              Ortga qaytish
            </button>
            <MyButton className="w-full">Saqlash</MyButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddFoot;
