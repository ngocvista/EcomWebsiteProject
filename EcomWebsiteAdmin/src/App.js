import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import Views from "./views";
import { Route, Switch } from "react-router-dom";
import useAuthCheck from "hook/useAuthCheck"; 

function App() {
  useAuthCheck(); // Gọi hook để kiểm tra token

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Views} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
