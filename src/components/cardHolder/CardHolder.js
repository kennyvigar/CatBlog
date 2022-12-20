import React from "react";
import styles from "../cardHolder/cardHolder.module.css";
import CatCard from "./CatCard";
import cats from "../../data/cats.js";
import CatOfTheDay from "./CatOfTheDay";

const createCatCard = (cat) => {
  return (
    <CatCard key={cat.key} name={cat.name} img={cat.img} notes={cat.notes} />
  );
};

//TO DO - learn this
// const createCatCard1 = (card) => {
//   return <CatCard {...card} />;
// };

export default (props) => (
  <div>
    <div className={styles.container}>
      <CatOfTheDay />
      <div className={styles.containersContainer}>
        {cats.map(createCatCard)}
      </div>
    </div>
  </div>
);
