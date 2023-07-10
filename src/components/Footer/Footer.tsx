import styles from "../../app/style.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import { IconButton } from "@mui/material";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.contacts}>
        <div className={styles.leftside}>
          <b>Контакти:</b>
          <a href="https://www.google.com/maps/place/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD+%D0%BA%D1%80%D0%B0%D1%81%D0%B8+%22%D0%95%D0%BB%D0%B5%D0%B3%D0%B0%D0%BD%D1%82%22/@49.8380862,24.0032829,18z/data=!4m6!3m5!1s0x473add82e482bbaf:0xe777db3a6c2faae2!8m2!3d49.838344!4d24.0039159!16s%2Fg%2F11b90fjsqt?entry=ttu">
            м. Львів, вул. Братів Міхновських 7
          </a>
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
        <p>© “Elegant” | 2023 | Всі права захищено. </p>
      </section>
    </div>
  );
};

export default Footer;
