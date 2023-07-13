import data from "../../data/data.json";
import styles from "./Intro.module.css";

function Intro() {
  console.log(data.about);
  return (
    <>
      <section className={styles.titleContainer}>
        <h1>Light up your world!</h1>
      </section>
      <section className={styles.aboutContainer}>
        {data.about.map((text) => (
          <div className={styles.aboutCard} key={text.id}>
            <h3>{text.title}</h3>
            <p>{text.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Intro;
