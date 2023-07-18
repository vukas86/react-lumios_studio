import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
import logo from "../assets/logos/_40288144-e7b7-496a-b16a-8baeacb41505-removebg-preview.png";

function MainNav() {
  const [isActive, setIsActive] = useState(false);

  const toggleBtnHandler = () => {
    setIsActive(!isActive);
    console.log(3);
  };

  const activeClass = isActive ? styles.active : "";

  return (
    <header>
      <nav className={styles.navBar}>
        <div className={styles.brandLogo}>
          <img src={logo} alt="logo" />
        </div>
        <a href="#" className={styles.toggleBtn} onClick={toggleBtnHandler}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </a>
        <div className={`${styles.navBarLinks} ${activeClass}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeBar : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.activeBar : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/works"
                className={({ isActive }) =>
                  isActive ? styles.activeBar : undefined
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.activeBar : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNav;
