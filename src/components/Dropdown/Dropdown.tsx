import React from "react";
import styles from "../../app/style.module.css";
import { circlesData } from "../../app/constants";
import { NavLink } from "react-router-dom";

interface Props {
  setState: () => void;
  closeBurger?: () => void;
  heigth1?: number;
}

const Dropdown = (props: Props) => {
  return (
    <section className={styles.dropdown} style={{ height: props.heigth1 }}>
      {circlesData.data.map((service) => {
        if (service.alt != "Догляд за волоссям") {
          return (
            <NavLink
              key={service.alt}
              onClick={() => {
                props.setState;
                if (props.closeBurger) {
                  props.closeBurger();
                }
              }}
              to={service.navigation}
            >
              <p>{service.alt}</p>
            </NavLink>
          );
        }
      })}
    </section>
  );
};

export default Dropdown;
