import styles from "./Office.module.css";
import office1 from "../../assets/images/off1.jpg";
import office2 from "../../assets/images/off2.jpg";
import office3 from "../../assets/images/off3.jpg";

function Office() {
  return (
    <>
      <div className={styles.officeContainer}>
        <h2 className="smallTitle">Our Office</h2>
        <h1>Belgrade, Serbia</h1>
        <section className={styles.officeImgs}>
          <img src={office1} alt="our office" />
          <img src={office2} alt="our office" />
          <img src={office3} alt="our office" />
        </section>
      </div>
    </>
  );
}

export default Office;
