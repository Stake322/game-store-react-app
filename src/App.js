import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import { Provider } from "react-redux";

import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>


            </Switch>

          </>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
