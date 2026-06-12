import { Routes, Route } from "react-router-dom";
import PasswordGenerator from "./pages/PasswordGenerator";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PasswordGenerator />} />
      </Routes>
    </>
  );
}

export default App;
