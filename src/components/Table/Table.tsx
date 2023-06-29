import React from "react";
import styles from "../../app/style.module.css";

export interface TableData {
  data: ServicesData[];
  tableName: string;
  bigTable?: boolean;
}

export interface ServicesData {
  name: string;
  price: string;
  secondPrice?: string;
  thirdPrice?: string;
}

const Table = (tableData: TableData) => {
  return (
    <section className={styles.eletable}>
      <h2>{tableData.tableName}</h2>
      <table className={styles.eletable__table}>
        <thead>
          {tableData.bigTable != true ? (
            <tr>
              <th>Назва послуги</th>
              <th>Ціна</th>
            </tr>
          ) : (
            <tr>
              <th>Назва послуги</th>
              <th>Коротке волосся</th>
              <th>Середнє волосся</th>
              <th>Довге волосся</th>
            </tr>
          )}
        </thead>
        <tbody>
          {tableData.bigTable != true
            ? tableData.data.map((x: ServicesData) => {
                return (
                  <tr key={x.name}>
                    <td>{x.name}</td>
                    <td>{x.price}</td>
                  </tr>
                );
              })
            : tableData.data.map((x: ServicesData) => {
                return (
                  <tr key={x.name}>
                    <td style={{ width: "40%" }}>{x.name}</td>
                    <td>{x.price}</td>
                    <td>{x.secondPrice}</td>
                    <td>{x.thirdPrice}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
// : tableData.data.map((x: ServicesData) => {
//     return (
//       <tr key={x.name}>
//         <td>{x.name}</td>
//         <td>{x.price}</td>
//       </tr>
//     );
//   })}
