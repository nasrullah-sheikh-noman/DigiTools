import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Activity from "./components/activity/Activity";
import ToggoleButton from "./components/toggoleButton/ToggoleButton";
import { Suspense, useState } from "react";
import PremiumCards from "./components/toggoleButton/premiumCards/PremiumCards";

const fetchCards = async () => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};

function App() {
  const cardPromise = fetchCards();

  const [cartItem, setCartItem] = useState(0);

  return (
    <>
      <Navbar cartItem={cartItem} />
      <Hero />
      <Activity />
      <ToggoleButton cartItem={cartItem} cardPromise={cardPromise} />
      {/* <Suspense
        fallback={
          <div className="flex justify-center items-center h-62">
            <span className="loading loading-spinner loading-xl "></span>
          </div>
        }
      >
        <PremiumCards cartItem={cartItem} setCartItem={setCartItem} />
      </Suspense> */}
    </>
  );
}

export default App;
