import MainNav from "../components/MainNav";
import errorImg from "../assets/images/404.svg";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <>
      <MainNav />
      <main className={styles.errorContainer}>
        <img src={errorImg} alt="error img" />
        <p>The page you are looking for doesn't exist or has been moved</p>
      </main>
    </>
  );
}

export default ErrorPage;
