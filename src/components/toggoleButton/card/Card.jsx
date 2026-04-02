
import { IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

const Card = ({ data, setCartItem, addToCart , setAddToCart }) => {

  setCartItem(addToCart.length);
  
  const handleCart = (data) => {
    const id = data.id;
    if(addToCart.includes(id)) {
      setAddToCart(addToCart.filter(item => item !== id));
      toast.error(`${data.title} Removed from Cart list.`, {position: "bottom-right"});
    } else {
      setAddToCart([...addToCart, id]);
      toast.success(`${data.title} added to Cart.`, {position: "bottom-right"});
    }
  }

  return (
    <div>
      <div
        key={data.id}
        className="card p-6 space-y-4 border-2 border-gray-300 rounded-2xl transform transition hover:scale-105 duration-300 hover:border-2 hover:border-pink-400"
      >
        <div className="flex justify-end  ">
          <h4
            className={`inline-fit text-lg font-semibold px-4 py-1 rounded-full ${data.badge === "Best Seller" ? "bg-green-400" : data.badge === "Most Popular" ? "bg-amber-400" : data.badge === "Popular" ? "bg-red-400" : data.badge === "New" ? "bg-pink-400" : "white"}`}
          >
            {data.badge}
          </h4>
        </div>
        <span className="w-9 h-9">
          <img src={data.image} alt="" />
        </span>
        <h2 className="text-3xl font-bold ">{data.title}</h2>
        <h4 className="text-[#627382] ">{data.description}</h4>
        <div className="flex items-center ">
          <h2 className="text-3xl font-bold">{data.price}</h2>
          <h4 className="text-xl text-[#627382]">/{data.billingCycle}</h4>
        </div>
        <div>
          <h3 className="text-lg text-[#627382]">{data.feature1}</h3>
          <h3 className="text-lg text-[#627382]">{data.feature2}</h3>
          <h3 className="text-lg text-[#627382]">{data.feature3}</h3>
        </div>
        <button
          onClick={() => {
            
            handleCart(data);
          }}
          className={`btn ${addToCart.includes(data.id) ? "btn-success"  : "btn-primary"} inline-block rounded-full transform transition hover:scale-105 duration-200 font-bold `}
        >
          {addToCart.includes(data.id) ? (
            <span className="flex items-center justify-center gap-2 font-bold">
              <IoMdCheckmark className="font-extrabold text-2xl" />
              Added to Cart
            </span>
          ) : (
            "Buy Now"
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
