import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import Description from "./Pages/Description";
import Learning from "./Pages/Learning";
import Sidebar from "./components/Navbar/Sidebar";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="div1">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Description />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>

        <div class="div3 pt-1">
          <Sidebar />
        </div>

        <div className="div5">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
