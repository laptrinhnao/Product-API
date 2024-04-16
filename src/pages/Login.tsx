import axios from "axios";
import { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginResult, setLoginResult] = useState();
  const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post(
        "https://dummyjson.com/auth/login",
        {
          username: username,
          password: password,
          expiresInMins: 30,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLoginResult(response.data);
        console.log("Success:", response.data.token);
        console.log(loginResult);

        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};

export default Login;
