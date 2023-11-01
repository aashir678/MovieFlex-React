import Home from "./Components/Home";
import Main from "./Components/Main";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MovieInfo from "./Components/MovieInfo";
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path=":imdbID" element={<MovieInfo />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
