import Navbar from "./components/Navbar";
import "./index.css";
import { Home } from "./components/Home.jsx";
import { Shop } from "./components/Shop.jsx";
import { StoryArcs } from "./components/Story.jsx";

import { ContactUs } from "./components/ContactUs.jsx";
import { Admin } from "./components/Admin.jsx";
import { SignIn } from "./components/SignIn.jsx";
import { Create } from "./components/Create/Create.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import CardValidator from "./components/CardValidator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/StoryArcs" element={<StoryArcs />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Validator" element={<CardValidator />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
