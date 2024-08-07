import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/routes/Home";
import HomeBody from "./assets/routes/Home/HomeBody";
import Products from "./assets/routes/Home/Products";
import Computer from "./assets/routes/Home/Products/Computer";
import Electronics from "./assets/routes/Home/Products/Eletronics";
import Books from "./assets/routes/Home/Products/Books";
import About from "./assets/routes/Home/About";
import NotFound from "./assets/routes/Home/NotFound";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path='home'  element={<HomeBody/>}/>
            <Route path="produtos" element={<Products />}>
              <Route path="computer" element={<Computer />} />
              <Route path="eletronics" element={<Electronics />} />
              <Route path="books" element={<Books />} />
            </Route>

            <Route path="about" element={<About />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
