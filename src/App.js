import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./com/Header";
import Home from "./com/Home";
import Coin from "./com/Coin";
import Exchanges from "./com/Exchanges";
import Coindetails from "./com/Coindetails";
// import Footer from "./com/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<Coindetails />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;