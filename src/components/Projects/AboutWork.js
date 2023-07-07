import styles from "./AboutWork.module.css";

import arrowIcon from "../../assets/icons/arrDo.svg";

function AboutWork() {
  return (
    <>
      <div className={styles.workContainer}>
        <h2 className="smallTitle">Our Work</h2>
        <p>
          We are a versatile design studio specializing in building brands and
          creating exceptional experiences. We excel at solving complex problems
          with innovative solutions, helping bold companies make a lasting
          impact. From crafting captivating visual identities to designing
          immersive digital and physical experiences, we curate every
          interaction to create amazing moments that captivate audiences.
          Collaborate with us to unlock your brand's full potential and embark
          on a remarkable design adventure.
        </p>
        <div className={styles.iconContainer}>
          <img src={arrowIcon} alt="arrow icon" className={styles.arrowIcon} />
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="arrowhead-down">
                <rect width="4" height="4" opacity="0" />
                <path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z" />
                <path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z" />
              </g>
            </g>
          </svg> */}
        </div>
      </div>
    </>
  );
}

export default AboutWork;
