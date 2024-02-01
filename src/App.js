import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
