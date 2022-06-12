import './App.css';
import Home from "./pages/Home";
import Details from "./pages/Details";
import Add from "./pages/Add";
import Search from "./pages/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/add' element={<Add />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;
