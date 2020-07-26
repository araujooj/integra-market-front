import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./hooks";
import Routes from "./Routes/";
import GlobalStyle from "./styles/global";
import Sidebar from "./components/sidebar";

const App: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
