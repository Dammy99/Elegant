import React from "react";
import styles from "../../app/style.module.css";
import Table, { ServicesData, TableData } from "../Table/Table";
import { useParams } from "react-router-dom";
import { hairdressingServices } from "../../app/constants";
const parsedServices: ServicesData[] = [
  { name: "Service 1", price: "100" },
  { name: "Service 2", price: "200" },
  { name: "Service 3", price: "300" },
];

const p: TableData = { data: parsedServices, tableName: "qwe" };

const Price = (data: TableData[]) => {
  const { pricesPage } = useParams();
  return (
    <section className={styles.price}>
      {pricesPage}
      <section className={styles.list}>LIST</section>
      <section className={styles.tables}>
        {pricesPage == "hairdressingServices" &&
          hairdressingServices.map((x: TableData) => {
            return <Table {...x}></Table>;
          })}
        <Table {...p}></Table>
      </section>
    </section>
  );
};

export default Price;
