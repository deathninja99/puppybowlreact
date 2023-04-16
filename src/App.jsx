import "./App.css";
import { Route, Routes } from "react-router-dom";
import Alldogs from "./assets/components/allPups";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <nav /> */}
        {/* <submitPup /> */}
        <Route path="/" element={<Alldogs />} />
        {/* <Route path="/:id" element={<Singledog></Singledog>} /> */}
        {/* <footer /> */}
      </Routes>
    </div>
  );
}

export default App;
