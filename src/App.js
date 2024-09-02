import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import SearchPage from "./components/SearchPage";
import  Modal  from "./components/Modal";
import Login from "./components/Login";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
