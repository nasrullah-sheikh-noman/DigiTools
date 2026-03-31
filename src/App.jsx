import { FaShoppingCart } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <div className=" navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="text-[#4F39F6] font-bold text-4xl">DigiTools</a>
        </div>
        <div>
          <ul>
            <a href="">Products</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Testimonials</a>
            <a href="">FAQ</a>
          </ul>
        </div>
        <div>
          <div>
            <FaShoppingCart />
            <button className="btn btn-active btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
