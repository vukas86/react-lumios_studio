import styles from "./Banner.module.css";

function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <h1>We Are Lumios Studio</h1>
        <p>Dare to be Different, Choose our Design Studio</p>
        <button className={styles.bnrBtn}>Contact Us</button>
      </div>
    </>
  );
}

export default Banner;
