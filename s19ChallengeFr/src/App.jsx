import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./pages/Login";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Register } from "./pages/Register";
import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <div>
        <Switch>
          <Route exact path="/">
            <Login user={user} setUser={setUser} />
          </Route>

          <Route path="/login">
            <Login user={user} setUser={setUser} />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/mainpage">
            <ProtectedRoute>
              <MainPage user={user} />
            </ProtectedRoute>
          </Route>

          <Route path="/profile">
            <ProtectedRoute>
              <ProfilePage user={user} />
            </ProtectedRoute>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
