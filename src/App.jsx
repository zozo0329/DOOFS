import React from "react";
import HeaderMain from "./Components/Header/HeaderMain/HeaderMain";
import MainContent from "./Components/Main/MainContent/MainContent";
import CartProvider from "./Other/Store/CartProvider";
import ThemeProvider from "./Other/Store/ThemeProvider";
import FooterMain from "./Components/Footer/1.FooterMain/FooterMain";

function App() {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <HeaderMain />
          <MainContent />
          <FooterMain />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
