import React from "react";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
        <Navbar />
          <Search />
        <Footer />
      </div>
  )
}
 
export default App;
