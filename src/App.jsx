import { Routes, Route } from "react-router-dom";
import PasswordGenerator from "./pages/PasswordGenerator";
function App() {
  return (
    <>
      <Routes>
        <Route to="/" element={<PasswordGenerator />} />
      </Routes>
    </>
  );
}

export default App;
