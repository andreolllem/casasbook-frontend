import Head from "next/head";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Endereço de Email"
          />
          <button className={styles.button} type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
