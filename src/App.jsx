import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Activity from "./components/activity/Activity";
import ToggoleButton from "./components/toggoleButton/ToggoleButton";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Activity/>
      <ToggoleButton/>
    </>
  );
}

export default App;
