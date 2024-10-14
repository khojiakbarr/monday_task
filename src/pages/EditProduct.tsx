import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProductItem } from "../store/reducers/reducers";
import MyButton from "../components/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { editProduct } from "../store/actions";
import { useForm } from "react-hook-form";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state: any) => state.products);

  interface FormData {
    id: string; // ProductItem id
    url: string; // ProductItem url
    name: string; // ProductItem name
    price: number; // ProductItem price
  }

  const getProductById = (id: string): ProductItem | undefined => {
    return products.find((product: ProductItem) => product.id === id);
  };
  const product = getProductById(id!);

  const { handleSubmit, register, reset } = useForm<FormData>({
    defaultValues: {
      id: product!.id,
      url: product!.url,
      name: product!.name,
      price: product!.price,
    },
  });
  const editProductFn = (data: ProductItem) => {
    dispatch(editProduct(data));
    reset();
    navigate("/");
  };
  return (
    <div>
      <Navbar path="edit" />
      <div className="container">
        <h1 className="text-[80px] text-[#141123] font-bold text-center mt-[63px] mb-[48px]">
          Edit food
        </h1>
        <form
          onSubmit={handleSubmit((data) => editProductFn(data))}
          className="flex flex-col gap-[20px] max-w-[600px] mx-auto"
        >
          <input
            type="text"
            placeholder="Mahsulot nomi"
            className="px-[15px] py-[12px] rounded-md border"
            defaultValue={product!.name}
            {...register("name")}
          />
          <input
            type="url"
            placeholder="Mahsulot rasmi urli"
            className="px-[15px] py-[12px] rounded-md border"
            defaultValue={product!.url}
            {...register("url")}
          />
          <input
            type="number"
            placeholder="Mahsulot narxi"
            className="px-[15px] py-[12px] rounded-md border"
            defaultValue={product!.price}
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
    </div>
  );
};

export default EditProduct;
