import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const AddedToCart = ({data, setAddToCart, setCartItem, addToCart}) => {
  console.log("addtocart", addToCart)

  const clearCard = (data) => {
    toast.error(` ${data.title} is deleted from the cart list. `, {position: "bottom-right"});
    setAddToCart(addToCart.filter(item => item !== data.id));
    setCartItem(prev => prev - 1);
  }

  return (
    <div>
      <div>
        <div className="flex justify-between border border-green-600 rounded-2xl py-6 px-8 items-center">
          <div className="flex justify-between items-center gap-5">
            <div>
              <span className="w-2 h-2">
                <img src={data.image} alt="" />
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-medium">{data.title}</h3>
              <h3 className="font-bold text-lg">{data.price}</h3>
            </div>
          </div>
          <button
            onClick={() => {
              clearCard(data);
            }}
            className="bg-gray-200 border p-2 rounded-full border-gray-200 hover:scale-110 transition transform duration-150 hover:cursor-pointer"
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedToCart;
