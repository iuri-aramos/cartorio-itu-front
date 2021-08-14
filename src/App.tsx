import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { Form } from "./pages/Form";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/teste" exact component={Form} />
      </BrowserRouter>
    </>
  );
}

export default App;
