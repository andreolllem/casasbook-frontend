import Head from "next/head";
import styles from "../styles/Account.module.css";
import { useContext } from "react";
import Link from "next/link";
import AuthContext from "../context/AuthContext";

const Account = () => {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user) {
    return (
      <div className={styles.notAccount}>
        <p>Por favor faça o login</p>
        <Link href="/login">
          <a>Voltar</a>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.account}>
      <Head>
        <title>Account Page</title>
      </Head>
      <h2>Account Page</h2>
      <Link href="/login">
        <a onClick={logoutUser}>Logout</a>
      </Link>
    </div>
  );
};

export default Account;
