import React from "react";
import styles from "../../app/style.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
const Header = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.contacts}>
        <div className={styles.leftside}>
          <b>Контакти:</b>
          <span>м. Львів, вул. Братів Міхновських 7</span>
          <span>+ 38 (067) 999 99 99</span>
          <span>+ 38 (067) 999 99 99</span>
        </div>
        <div className={styles.rightside}>
          <b>Ми працюємо:</b>
          <span>Пн-Сб: 10:00 - 19:00</span>
          <span>Нд: 10:00 - 15:00</span>
          <div>
            <IconButton
              edge="start"
              size="small"
              href="https://www.instagram.com/beautysalon_elegant_lviv/"
            >
              <InstagramIcon fontSize="large" color="action" />
            </IconButton>
          </div>
        </div>
        <div className={styles.social}></div>
      </section>
      <section>
        <p>© “Elegant” | 2005 | Всі права захищено. </p>
      </section>
    </div>
  );
};

export default Header;
