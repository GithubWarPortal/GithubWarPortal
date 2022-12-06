import Navbar from "./components/Navbar";
import "./index.css";
import {Home } from "./components/Home.jsx";
import {Account} from "./components/Account.jsx";
import {StoryArcs} from "./components/StoryArcs.jsx";
import {Shop} from "./components/Shop.jsx";
import {ContactUs} from "./components/ContactUs.jsx";
import {Team} from "./components/Team.jsx";
import {OtherCreativeWorks} from "./components/OtherCreativeWorks.jsx";
import {Events} from "./components/Events.jsx";
import{Investing} from "./components/Investing.jsx";
import {  BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import CardValidator from "./components/CardValidator";


function App() {
  return (
    <>
      <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Home" element={<Home />}/>
          <Route path="/Account" element={<Account />} />
          <Route path="/StoryArcs" element={<StoryArcs />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Validator" element={<CardValidator />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/OtherCreativeWorks" element={<OtherCreativeWorks />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Investing" element={<Investing />} />
       
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
