import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./pages/Login";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Register } from "./pages/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
