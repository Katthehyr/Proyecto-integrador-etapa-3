import React from "react";
import { BrowserRouter} from "react-router-dom";

import Rutas from "./routes/Rutas";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>

    <Navbar />
    
    <Rutas />

    <Footer />
    
  </BrowserRouter>

  )
}

export default App