import styles from "./styles.module.css";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar.jsx";

const AuthPage = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_APP_API_URL}/signin`;
      const { data: res } = await axios.post(url, data);
      console.log(res);
      if (res.status === 401) {
        setError("Wrong username or password");
      } else {
        localStorage.setItem("token", res.token);
        localStorage.setItem("name", res.userName);
        localStorage.setItem("userID", res.userId);
        localStorage.setItem("groupID", res.groupId);
        localStorage.setItem("bio", res.bio);
        //localStorage.setItem('imageUrl', res.imageUrl);
        window.location = "/";
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <div className="screen bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <div
          style={{ height: "10vh", width:"100%" }}
        >
          <Navbar />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-white text-6xl font-bold"></h1>
          </div>
        </div>

        <div className="login_box mt-10 flex flex-col"> {/* Adjust the margin top (mt) to move the login box down */}
          <div className="login_text mb-10">Login</div>

          <form className="input_contain flex flex-col justify-around h-64" onSubmit={handleSubmit}>
            <input
              type="username"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={data.username}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}

            <button type="submit" className={styles.acct_btn_pos}>
              <div className={styles.acct_btn}>Sign In</div>
            </button>
            <div className={styles.or}>or</div>
            <button className={styles.acct_btn_pos}>
              <a className={styles.acct_btn} href="/create-account">
                Create new account
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
