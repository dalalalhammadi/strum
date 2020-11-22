import { useState } from "react";
import { Route, Switch } from "react-router";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles.js";

import UkuleleList from "./components1/UkuleleList";
import UkuleleDetail from "./components1/UkuleleDetail";
import Home from "./components1/Home";
import NavBar from "./components1/NavBar";

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
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <Switch>
        <Route path="/ukulele/:ukuleleSlug">
          <UkuleleDetail />
        </Route>
        <Route path="/ukulele">
          <UkuleleList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
