import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Activity from "./components/activity/Activity";
import ToggoleButton from "./components/toggoleButton/ToggoleButton";
import PremiumCards from "./components/premiumCards/PremiumCards";
import { Suspense, useState } from "react";

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
      <Navbar cartItem={cartItem}/>
      <Hero />
      <Activity />
      <ToggoleButton cartItem={cartItem}/>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PremiumCards cardPromise={cardPromise} cartItem={cartItem} setCartItem={setCartItem} />
      </Suspense>
    </>
  );
}

export default App;
