import React, { useState, useEffect } from "react";
import styles from "../cardHolder/cardHolder.module.css";
import axios from "axios";

//get API data for cat of the day

const GetCatOfTheDay = () => {
  const getCat = async () => {
    try {
      const response = await axios.get(`https://catfact.ninja/fact?max_length=140`);

      setCat(response.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  const [cat, setCat] = useState([]);
  //Use Effect calls the get request function, hits API
  useEffect(() => {
    getCat();
  }, []);

  return (
    <div className={styles.kittehcards}>
      <h2 className={styles.notes}>{cat.fact}</h2>
      <button onClick={getCat}>Click for more Cat Facts!</button>

    </div>
  );
};

export default GetCatOfTheDay;
