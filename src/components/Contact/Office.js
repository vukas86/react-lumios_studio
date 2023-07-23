import useLazyLoading from "../../hooks/useLazyLoading";

import styles from "./Office.module.css";

import office1 from "../../assets/images/off1.jpg";
import office1lazy from "../../assets/images/off1 - compressed.jpg";
import office2 from "../../assets/images/off2.jpg";
import office2lazy from "../../assets/images/off2 - compressed.jpg";
import office3 from "../../assets/images/off3.jpg";
import office3lazy from "../../assets/images/off3 - compressed.jpg";

function Office() {
  const { blurClass } = useLazyLoading();

  return (
    <>
      <div className={styles.officeContainer}>
        <h2 className="smallTitle">Our Office</h2>
        <h1>Belgrade, Serbia</h1>
        <section className={styles.officeImgs}>
          <img
            src={office1lazy}
            data-src={office1}
            alt="our office"
            className={blurClass}
          />
          <img
            src={office2lazy}
            data-src={office2}
            alt="our office"
            className={blurClass}
          />
          <img
            src={office3lazy}
            data-src={office3}
            alt="our office"
            className={blurClass}
          />
        </section>
      </div>
    </>
  );
}

export default Office;
