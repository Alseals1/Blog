import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PostDetails from "./pages/PostDetails";
import { Create } from "./pages/Create";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/create" element={<Create />} />
          </Routes>
          <Toaster />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
