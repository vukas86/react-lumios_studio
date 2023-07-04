import styles from "./Info.module.css";
import developer from "../../assets/images/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg";
import logo1 from "../../assets/logos/ad-removebg-preview.png";
import logo2 from "../../assets/logos/ds-removebg-preview.png";
import logo3 from "../../assets/logos/ss-removebg-preview.png";
import logo4 from "../../assets/logos/uh-removebg-preview.png";

function Info() {
  return (
    <>
      <div className={styles.infoContainer}>
        <div className={styles.upPart}>
          <div className={styles.box}>
            <p>
              I think Microsoft named .Net so it wouldnt show up in a Unix
              directory listing. Oktal PHP is a minor evil perpetrated and
              created by incompetent amateurs, whereas Perl is a great and
              insidious evil perpetrated by skilled but perverted professionals.
            </p>
          </div>
          <img
            src={developer}
            alt="Our team members"
            className={styles.infoImage}
          ></img>
        </div>
        <div className={styles.bottomPart}>
          <h2>Our partners</h2>
          <div className={styles.infoLogos}>
            <img src={logo1} alt="logo1" className={styles.logoImgInfo} />
            <img src={logo2} alt="logo2" className={styles.logoImgInfo} />
            <img src={logo3} alt="logo3" className={styles.logoImgInfo} />
            <img src={logo4} alt="logo4" className={styles.logoImgInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
