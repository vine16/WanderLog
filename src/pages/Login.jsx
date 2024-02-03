import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import buttonStyles from "../components/Button.module.css";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  useEffect(
    //only run when isAuthenticated is changed
    function () {
      // The replace: true option in the navigate function is used to replace the current entry in the navigation history with the new one. This means that when the user logs in successfully (isAuthenticated becomes true), the current page in the browser's history will be replaced with the new "/app" route, and the user won't be able to navigate back to the login page using the browser's back button.
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated]
  );
  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type={"primary"}>Login</Button>
        </div>
      </form>
    </main>
  );
}
