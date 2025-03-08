import Home from "./compoments/pages/Home";
import Login from "./compoments/pages/Login";
import Header from "./compoments/header";
import { Routes, Route } from "react-router-dom";
import Signup from "./compoments/pages/Signup";
import Chat from "./compoments/pages/chat";
import { useAuth } from "./context/AuthContext";

function App() {
  console.log(useAuth()?.isloggedIn);
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </main>
  );
}

export default App;
