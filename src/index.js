import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { reducer, initialState } from "./context/reducer";

render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById("root")
);
