import './App.css';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Register from './components/Register';

function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route exact path="/Landing-Page-and-Form" element={<Home/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
