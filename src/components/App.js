import Payment from "./Payment";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Success from "../pages/Success";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
