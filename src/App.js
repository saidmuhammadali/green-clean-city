import "./App.css";
import Navbar from "../src/components/Navbar/index";
import MarketPlace from "../src/components/Marketplace/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/index";
import SignUp from "../src/components/SignUp/index";
import Clothes from "../src/components/Clothes/index";
import Food from "../src/components/Food/index";
import Beeline from "../src/components/Beeline/index";
import Mobiuz from "../src/components/Mobiuz/index";
import Location from "../src/components/Location/location";
import Ucell from "../src/components/Ucell/index";
import Combo from "../src/components/Combo/index";
import Drinks from "../src/components/Drinks/index";
import About from "../src/components/About/index";
import Fruit from "../src/components/Fruit/index";
import Uzum from "../src/components/Uzum/index";
import Assahiy from "../src/components/Assahiy/index";
import Donation from "../src/components/Donation/index";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Header />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/food" element={<Food />} />
          <Route path="/informationBeeline" element={<Beeline />} />
          <Route path="/informationMobiuz" element={<Mobiuz />} />
          <Route path="/location" element={<Location />} />
          <Route path="/informationUcell" element={<Ucell />} />
          <Route path="/menuCombo" element={<Combo />} />
          <Route path="/menuDrinks" element={<Drinks />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/menuFruit" element={<Fruit />} />
          <Route path="/uzumMarket" element={<Uzum />} />
          <Route path="/booksAssahiy" element={<Assahiy />} />
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
