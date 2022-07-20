import React, { useState } from "react";
import styles from "../cardHolder/cardHolder.module.css";
import data from "../../data/cats.js";

const CatOfTheDay = (data) => {
  var catNum = data[Math.floor(Math.random() * data.length)];
  console.log(catNum);

  return (
    <CatOfTheDay
      key={data[catNum].key}
      name={data[catNum].name}
      img={data[catNum].img}
      notes={data[catNum].notes}
    />
  );
};

export default (props) => (
  <div className={styles.kittehcardOfTheDay}>
    <p className={styles.titleKOTD}>{props.name}</p>
    <img src={props.img} />
    <p className={styles.notes}>{props.notes}</p>
  </div>
);
