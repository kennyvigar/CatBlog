import React from "react";
import styles from "../header/header.module.css";

export default () => (

  <div className={`${styles.removeMargin} ${styles.preHeader}`}>
      <h2 className={`${styles.removeMargin}`}>Eveline's Amazing</h2>
      <h1 className={`${styles.removeMargin} ${styles.header} }`}>Cat Blog</h1>
      
    </div>
);
