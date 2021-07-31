import React from "react";
import { Container, CssBaseline } from "@material-ui/core";

import TopBar from "./mainPage/TopBar";
import Header from "./mainPage/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <Container>
        <Header />
      </Container>
    </React.Fragment>
  );
}

export default App;
