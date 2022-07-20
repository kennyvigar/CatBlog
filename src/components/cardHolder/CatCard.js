import React from "react";
import styles from "../cardHolder/cardHolder.module.css";

export default (props) => (
  <div className={styles.kittehcards}>
    <p className={styles.title}>{props.name}</p>
    <img src={props.img} />
    <p className={styles.notes}>{props.notes}</p>
  </div>
);
