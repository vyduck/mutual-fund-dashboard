import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewFund from "./pages/NewFund";
import ViewFund from "./pages/ViewFund";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/create-fund" element={< NewFund />} />
          <Route path="/view-fund/:fundName" element={< ViewFund />} />
        </Routes>
      </main>
    </>
  );
}

export default App;