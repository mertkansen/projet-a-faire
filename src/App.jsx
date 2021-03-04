import React from "react";
import "./styles/App.css";

// ROUTING
import { Switch, Route } from "react-router-dom";

// COMPONENTS AND PAGES
import { Nav, Footer, SignUp } from "./components";
import { Home, Login, Movies, DetailPage } from "./pages";

const App = () => {
  return (
    <div className="app">
      <Nav />

      <Switch>
        <Route path="/details" component={DetailPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/movies" component={Movies} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
