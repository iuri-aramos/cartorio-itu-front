import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import TopBar from "./mainPage/TopBar";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <Container>Testing the Github Actions and Pages</Container>
    </React.Fragment>
  );
}

export default App;
