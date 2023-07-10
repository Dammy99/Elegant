import React, { useEffect } from "react";
import styles from "../../app/style.module.css";
import Table, { ServicesData, TableData } from "../Table/Table";
import { NavLink, useParams, useLocation } from "react-router-dom";
import {
  eyebrowsAndEyelashes,
  hairdressingServices,
  manicureService,
} from "../../app/constants";

const parsedServices: ServicesData[] = [
  { name: "Service 1", price: "100" },
  { name: "Service 2", price: "200" },
  { name: "Service 3", price: "300" },
];

const p: TableData = { data: parsedServices, tableName: "qwe" };

const Price = () => {
  const { pricesPage } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeItem = searchParams.get("current");
  useEffect(() => {
    if (activeItem) {
      window.scrollTo(0, 0);
      const element = document.getElementById(activeItem);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeItem]);

  return (
    <div className={styles.pricePage}>
      <section className={styles.price}>
        <section className={styles.list}>
          <NavLink
            to="/price/hairdressingService"
            data-link-alt="Перукарські послуги"
          >
            Перукарські послуги
          </NavLink>
          <span className={styles.slash}>|</span>
          <NavLink to="/price/manicureService" data-link-alt="Послуги манікюру">
            Послуги манікюру
          </NavLink>
          <span className={styles.slash}>|</span>
          <NavLink to="/price/eyebrows&eyelashes" data-link-alt="Брови та вії">
            Брови та вії
          </NavLink>
        </section>
        <section className={styles.tables}>
          {pricesPage == "hairdressingService" &&
            hairdressingServices.map((x: TableData) => {
              return <Table key={x.tableName} {...x}></Table>;
            })}
          {pricesPage == "hairdressingService" && (
            <div className={styles.alarm}>
              <div>
                <p>
                  ЦІНИ ВКАЗАНІ БЕЗ УРАХУВАННЯ МАТЕРІАЛІВ ТА ЗАЛЕЖАТЬ ВІД ДОВЖИНИ
                  І ГУСТИНИ ВОЛОССЯ, ТОМУ ОСТАТОЧНА ЦІНА ВИЗНАЧАЄТЬСЯ ПЕРЕД
                  ПРОЦЕДУРОЮ.
                </p>
              </div>
            </div>
          )}
          {pricesPage == "manicureService" &&
            manicureService.map((x: TableData) => {
              return <Table key={x.tableName} {...x}></Table>;
            })}
          {pricesPage == "eyebrows&eyelashes" &&
            eyebrowsAndEyelashes.map((x: TableData) => {
              return <Table key={x.tableName} {...x}></Table>;
            })}
        </section>
      </section>
    </div>
  );
};

export default Price;
