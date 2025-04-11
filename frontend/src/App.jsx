import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PostDetails from "./pages/PostDetails";
import { Create } from "./pages/Create";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/create" element={<Create />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
