import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navigation = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className={styles.nav}>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        />
      </Head>
      <Link href="/">
        <div>
          <h2>LocationBook</h2>
        </div>
      </Link>
      <div className={styles.auth}>
        {user ? (
          <Link href="/account">
            <a>
              <i
                className="fal fa-user"
                alt={user.email}
                style={{ fontSize: 30, marginRight: 20 }}
              ></i>{" "}
              <div
                className="dropdown"
                style={{ width: "50%", textAlign: "center" }}
              >
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    marginTop: -50,
                    marginLeft: 20,
                    color: "#bc94f9",
                    fontSize: 20,
                  }}
                ></button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenu2"
                  style={{ backgroundColor: "#272b36" }}
                >
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      style={{ color: "#bc94f9" }}
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      style={{ color: "#bc94f9" }}
                    >
                      <Link href="/login">
                        <a onClick={logoutUser}>Sair</a>
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </a>
          </Link>
        ) : (
          <Link href="/login">
            <a>
              <i
                className="fal fa-user"
                style={{ fontSize: 30, marginRight: 20 }}
              ></i>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navigation;
