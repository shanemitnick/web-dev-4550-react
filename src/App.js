import HelloWorld from "./components/HelloWorld";
import Labs  from "./components/Labs/index";
import Index from "./components/tuiter";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";




function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" exact={true} element={<HelloWorld />} />
                  <Route path="/" exact={true}  element={<Labs />} />
                  <Route path="/tuiter" exact={true}  element={<Index />} />
              </Routes>

              <Link to="/tuiter"> <h1>LINK TO REACT TUITER (FOR ASSIGNMENT 6) </h1> </Link>
          </div>
      </BrowserRouter>
  );
}

export default App;
