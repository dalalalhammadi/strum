import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles.js";

import NavBar from "./components1/NavBar";
import Routes from "./components1/Routes";
import { observer } from "mobx-react";
import ukuleleStore from "./stores/ukuleleStore.js";

const theme = {
  light: {
    mainColor: "#7BDCB5",
    backgroundColor: "#FCB900",
    blue: "#9900EF",
    red: "#F78DA7",
  },
  dark: {
    mainColor: "3FCB900",
    backgroundColor: "#7BDCB5",
    blue: "#9900EF",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
        {ukuleleStore.loading === true ? <h1> loading</h1> : <Routes />}
      </ThemeProvider>
    </>
  );
}

export default observer(App);
