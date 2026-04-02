import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Activity from "./components/activity/Activity";
import ToggoleButton from "./components/toggoleButton/ToggoleButton";
import { useState } from "react";
import Steps from "./components/steps/Steps";

const fetchCards = async () => {
  const res = await fetch("/data.json");
  const data = res.json();
  return data;
};

function App() {
  const cardPromise = fetchCards();

  const [cartItem, setCartItem] = useState([]);
  const [addToCart, setAddToCart] = useState([]);

  return (
    <>
      <Navbar cartItem={cartItem} />
      <Hero />
      <Activity />
      <ToggoleButton
        cartItem={cartItem}
        setCartItem={setCartItem}
        cardPromise={cardPromise}
        addToCart={addToCart}
        setAddToCart={setAddToCart}
      />
      <Steps/>
      
    </>
  );
}

export default App;
