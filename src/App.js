import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import { Provider } from "react-redux";
import { GamePage } from "./pages/game-page/game-page";
import { store } from "./redux";
import { OrderPage } from "./pages/order-page/order-page";

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
              <Route exact path="/app/:title">
                <GamePage />
              </Route>
              <Route exact path="/order">
                <OrderPage />
              </Route>
            </Switch>

          </>
        </Router>
      </div>
    </Provider>

  );
}

export default App;
