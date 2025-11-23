import HomeHead from "./Components/HomeHead";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <HomeHead />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
