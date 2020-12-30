import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { fromImageToUrl, API_URL } from "../utils/urls";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import Login from "./login";

export default function Home({ casas }) {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user) {
    return (
      <div className={styles.notAccount}>
        <Link href="/login">
          <Login />
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {casas.map((casa) => (
          <Card
            className={styles.card_casas}
            style={{
              width: "25rem",
              top: 60,
              marginTop: 20,
              float: "left",
              justifyContent: "space-between",
              border: "#232626",
              borderRadius: 8,
              backgroundColor: "#272b36",
              maxWidth: 400,
              marginLeft: 50,
            }}
            key={casa.name}
          >
            <Link href={`/casas/${casa.slug}`}>
              <div className={styles.card_casas}>
                <Card.Img
                  src={fromImageToUrl(casa.image[0])}
                  alt=""
                  style={{ cursor: "pointer", padding: 20 }}
                />

                <Card.Body
                  style={{
                    backgroundColor: "#272b36",
                    color: "#fff",
                    border: "#232626",
                    cursor: "pointer",
                    fontWeight: 200,
                    borderRadius: 8,
                  }}
                >
                  <div>Locação: {casa.name}</div>
                  <div>Quartos: {casa.quartos}</div>
                  <div>Banheiro: {casa.wc}</div>
                  <div>Garagem: {casa.garagem} carros</div>
                </Card.Body>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const casa_res = await fetch(`${API_URL}/casas/`);
  const casas = await casa_res.json();

  return {
    props: {
      casas,
    },
  };
}
