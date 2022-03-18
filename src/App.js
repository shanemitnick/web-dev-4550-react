import HelloWorld from "./components/HelloWorld";
import Labs  from "./components/Labs/index";
import Index from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './vendors/bootstrap.min.css';
import './vendors/bootstrap.bundle.min';
import './vendors/fontawesome-free-5.15.4-web/css/all.css';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/hello" exact={true} element={<HelloWorld />} />
                  <Route path="/" exact={true}  element={<Labs />} />
                  <Route path="/tuiter" exact={true}  element={<Index />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
