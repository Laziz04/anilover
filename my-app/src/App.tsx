import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./header/header";
import Section_card from "./section_card/section_card";
import Section_filter from "./section_filter/section_filter.";
import Section_footer from "./footer/footer";
import Admin_page from "./admin_page/admen_page";
import Logout from "./logout/logout";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Section_card />
        <Section_filter />
        <Section_footer />
        <Admin_page />
        <Logout />
      </div>
    </ChakraProvider>
  );
}

export default App;
