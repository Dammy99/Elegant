import React from "react";
import styles from "../../app/style.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../public/LogoBackless.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <section className={styles.contacts}>
        <div className={styles.leftside}>
          <p>м. Львів, вул. Братів Міхновських 7</p>
          <div className={styles.numbers}>
            <span>+ 38 (067) 999 99 99</span>
            <span>+ 38 (067) 999 99 99</span>
          </div>
        </div>
        <div className={styles.logo}>
          <img src={logo}></img>
        </div>
        <div className={styles.rightside}>
          <p>Ми працюємо:</p>
          <p>Пн-Сб: 10:00 - 19:00</p>
          <p>Нд: 10:00 - 15:00</p>
        </div>
      </section>
      <section className={styles.menu}>
        <div className={styles.links}>
          <ul>
            <li>
              <NavLink to="/" data-link-alt="Головна">
                <span>Головна</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/price" data-link-alt="Ціни">
                <span>Ціни</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" data-link-alt="Про послуги">
                <span>Про послуги</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/makeup" data-link-alt="Засоби для волосся">
                <span>Засоби для волосся</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.burger}>
        <input type="checkbox" className={styles.toggler}></input>
        <div className={styles.hamburger}>
          <div></div>
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.navmenu}>
          <div>
            <ul>
              <li>
                <NavLink to="/" data-link-alt="Головна">
                  <span>Головна</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/price" data-link-alt="Ціни">
                  <span>Ціни</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" data-link-alt="Про послуги">
                  <span>Про послуги</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/makeup" data-link-alt="Засоби для волосся">
                  <span>Засоби для волосся</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
