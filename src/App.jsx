import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Activity from "./components/activity/Activity";
import ToggoleButton from "./components/toggoleButton/ToggoleButton";
import PremiumCard from "./components/premiumCard/PremiumCard";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Activity/>
      <ToggoleButton/>
      <PremiumCard/>
    </>
  );
}

export default App;
