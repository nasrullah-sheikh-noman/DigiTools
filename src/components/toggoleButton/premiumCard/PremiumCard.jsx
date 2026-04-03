
import Card from "../card/Card";

const PremiumCard = ({ cardData, setCartItem, addToCart, setAddToCart }) => {

  

  return (
    <div className="max-w-300 mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 border-2 border-red-600 p-2 sm:p-4 md:p-6 lg:p-8 my-12 rounded-2xl hover:border-2 hover:border-green-500 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
        {cardData.map((data) => (
          <div key={data.id}>
            <Card data={data} setCartItem={setCartItem} addToCart={addToCart} setAddToCart={setAddToCart}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumCard;
