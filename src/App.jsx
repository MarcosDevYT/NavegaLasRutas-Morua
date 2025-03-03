import { BrowserRouter, Route, Routes } from "react-router"

import Home from "./pages/Home"
import Category from "./pages/Category"
import NotFound from "./pages/NotFound"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Layout/Footer"
import ItemDetailContainer from "./containers/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} /> {/* Nueva ruta */}
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/detalle-producto/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
