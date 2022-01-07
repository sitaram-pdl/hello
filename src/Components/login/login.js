import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/APIUtils";
import { removeToken, storeToken } from "../../persistence/Storage";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleusernameChange = (e) => {
    const username = e.target.value;
    const prevUser = { ...user };

    const newUser = {
      username: username,
      password: prevUser.password,
    };

    setUser(newUser);
    if (!usernameValidator(username))
      document.getElementById("error_username").innerHTML =
        "<span style='color: red;'>Invalid username address</span>";
    else
      document.getElementById("error_username").innerHTML =
        "<span style='color: green;'>Valid username Address</span>";
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const prevUser = { ...user };

    const newUser = {
      username: prevUser.username,
      password: password,
    };

    setUser(newUser);
    if (!passwordValidator(password))
      document.getElementById("error_password").innerHTML =
        "<span style='color: red;'>Password cannot be less than 5</span>";
    else
      document.getElementById("error_password").innerHTML =
        "<span style='color: green;'>Valid Password</span>";
  };

  const username_REGEX = "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/";

  const usernameValidator = (username) => {
    return username.toLowerCase().length > 5;
    // .match(username_REGEX)
  };
  const passwordValidator = (username) => {
    return username.length > 5;
  };
  const handleLogin = async () => {
    if (usernameValidator(user.username) && passwordValidator(user.password)) {
      login(user).then((data) => {
        console.log(data);
        if (data.status == 200) {
          navigate("/admin-dashboard");
          storeToken("JWT", data.data);
        } else alert("Incorrect username or password");
      });

      //
    } else alert("Please fill up form correctly");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={(e) => {
          const name = { ...user };
          name.username = e.target.value;
          name.username.trim();
          setUser(name);
        }}
        placeholder="Enter your username/Username"
      />
      <p id="error_username" />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={(e) => {
          const name = { ...user };
          name.password = e.target.value;
          name.password.trim();
          setUser(name);
        }}
        placeholder="Enter your Password"
      />
      <p id="error_password" />
      <div className="button" onClick={handleLogin}>
        Login
      </div>
    </div>
  );
};

export default Login;
