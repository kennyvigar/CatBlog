import React, { useState, useEffect } from "react";
import styles from "../cardHolder/cardHolder.module.css";
import axios from "axios";

//get API data for cat of the day

const GetCatOfTheDay = () => {
  const getCat = async () => {
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search`);

      setCat(response.data[0]);
      console.log(response.data[0])
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
      <div className={styles.notes}>
      <img className={styles.catPic} src={cat.url}></img>
      </div>
      <button className={styles.button}onClick={getCat}>Cat Pic</button>
      <p>Check out the cat surfer!!<br></br>
      Click the button to surf Cats!</p>

    </div>
  );
};

export default GetCatOfTheDay;
