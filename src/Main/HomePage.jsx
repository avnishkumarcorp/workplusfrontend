import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroPage from "../Components/HeroPage";

const HomePage = () => {
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ]

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ]
  return (
    <div>
      <Navbar /> 
      <HeroPage />
      <Footer />
    </div>
  )
};

export default HomePage;
