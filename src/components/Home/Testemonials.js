import { useEffect, useState } from "react";

import styles from "./Testemonials.module.css";

function Testemonials() {
  const [activeMsg, setActiveMsg] = useState(0);

  const testemContent = [
    {
      message:
        "Māui dreamed of the day that he could go fishing with his olderbrothers. Each time his brothers returned from a fishing trip Māui would ask, Next time, can I come fishing with you?. But Māui's brothers would always make an excuse. No you're much too young to because that challenge is one that we are willing to accept, one we are unwilling to postpone,  too come fishing with us. We need all the room.",
      name: "Jack Baker",
      position: "Founder of Advance Date",
    },
    {
      message:
        "We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.",
      name: "Emily Berkhoff",
      position: "CEO of Disco Store",
    },
    {
      message:
        "Nut gain traction, so productize, out of scope, or at the end of the day, nor action item. Quick-win. Waste of resources upstream selling, but move the needle. Don't over think it. Vec donuts in the break room, or the right info at the right time to the right people put it on the parking lot, so finance. I am dead inside weaponize the data, but back of the net, but bake it in, nor accountable talk. Let's unpack that later.",
      name: "John Perlman",
      position: "General Manager of Urban Hub",
    },
  ];

  const handleRadioChange = (event) => {
    setActiveMsg(parseInt(event.target.value));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMsg((prevMsg) =>
        prevMsg === testemContent.length - 1 ? 0 : prevMsg + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testemContent.length]);

  console.log(activeMsg);

  return (
    <>
      <div className={styles.testemContainer}>
        <h2 className="smallTitle">Testemonials</h2>
        <div className={styles.testemCards}>
          {testemContent.map((content, index) => (
            <div
              key={index}
              className={`slide${index === activeMsg ? ".active" : ""} ${
                styles.testemCard
              }`}
            >
              <p className={styles.comment}>{content.message}</p>
              <p className={styles.testemName}>{content.name}</p>
              <p className={styles.testemPosit}>{content.position}</p>
            </div>
          ))}
          <div className="radio-buttons">
            {testemContent.map((_, index) => (
              <label
                key={index}
                className={`radio-button${
                  index === activeMsg ? ".active" : ""
                }`}
              >
                <input
                  type="radio"
                  value={index}
                  checked={index === activeMsg}
                  onChange={handleRadioChange}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testemonials;
