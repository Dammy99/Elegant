import React from "react";
import styles from "../../app/style.module.css";

export interface TableData {
  data: ServicesData[];
  tableName: string;
}

export interface ServicesData {
  name: string;
  price: string;
}
const Table = (tableData: TableData) => {
  return (
    <section className={styles.eletable}>
      <h2>{tableData.tableName}</h2>
      <table className={styles.eletable__table}>
        <thead>
          <tr>
            <th>Процедура</th>
            <th>Ціна</th>
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((x: ServicesData) => {
            return (
              <tr key={x.name}>
                <td>{x.name}</td>
                <td>{x.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
