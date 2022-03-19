import HelloWorld from "./components/HelloWorld";
import Labs  from "./components/Labs/index";
import Index from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";




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
