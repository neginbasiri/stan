import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer, Home, Series, Movies } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <Header></Header>
      <div className={styles.appContent}>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/series" component={Series}></Route>
          <Route path="/movies" component={Movies}></Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
