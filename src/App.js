import Notes from "./pages/Notes";
import Create from "./pages/Create";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Layout>        
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />}/>
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
