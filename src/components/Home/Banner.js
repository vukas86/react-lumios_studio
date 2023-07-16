import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <h1>We Are Lumios Studio</h1>
        <p>Dare to be Different, Choose our Design Studio</p>
        <Link to="/contact">
          <button className={styles.bnrBtn}>Contact Us</button>
        </Link>
      </div>
    </>
  );
}

export default Banner;
