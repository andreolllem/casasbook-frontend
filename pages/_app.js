import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <content>
        <Component {...pageProps} />
        <Navigation />
      </content>
    </AuthProvider>
  );
}

export default MyApp;
