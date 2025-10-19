import { use, useEffect, useState } from "react";
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
import axios from "axios";

function App() {
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");

  function getUserData() {
    if (token && Object.entries(user).length === 0) {
      axios
        .get("http://localhost:3000/workintech/api/v1/auth/me", {
          withCredentials: true, //Bunun sayesinde çerezlerin backende gönderilip oturum doğrulaması yaptırıyoruz.
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        });
    }
  }
  useEffect(() => {
    getUserData();
  }, []);

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
