import React from "react";
import styles from "../cardHolder/cardHolder.module.css";
// import newsartapril01 from 'catblog/CatBlog/src/pictures/newsartapril01.jpeg'

//get API data for cat of the day

const epsNews = () => {


    return (
<div className={styles.epsnews}>
    <div>
            </div>
            <h2>April 1st</h2>
            <p>This is some new art I made</p>
            {/* <img src="../../public/pictures/newsartapril01.jpeg"/>
      <img src={process.env.PUBLIC_URL + "newsartapril01.jpeg"/>  */}
            <img src={process.env.PUBLIC_URL + 'pictures/newsartapril01.jpeg'} alt="My Image" />
</div>

    );
};

export default epsNews;
