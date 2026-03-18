import React from "react";
import HeaderMain from "./Components/Header/HeaderMain/HeaderMain";
import MainContent from "./Components/Main/MainContent/MainContent";
import CartProvider from "./Other/Store/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <HeaderMain />
        <MainContent />
      </CartProvider>
    </>
  );
}

export default App;
