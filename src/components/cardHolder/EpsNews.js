import React from "react";
import styles from "../cardHolder/cardHolder.module.css";
// import newsartapril01 from 'catblog/CatBlog/src/pictures/newsartapril01.jpeg'

//get API data for cat of the day

const epsNews = () => {


    return (
        <div className={styles.epsnews}>
            
            <div className={styles.blogBrick1}>
                <h2>January 25 </h2>
                <p></p>
                <p>I have a good joke</p>
                <br></br>
                <p>joke of the day:</p>
                <br></br>
                <p>why did bike fall over?</p>
                <p>because it was too tired</p>
                <img src={process.env.PUBLIC_URL + 'pictures/garneau-gros-louis-2-fat-bike.webp'} alt="My Image" />

            </div>

            <div className={styles.blogBrick1}>
                <h2>January 24 </h2>
                <p>happy new year</p>
                <p>something new, i am going to add is</p>
                <br></br>
                <p>joke of the day:</p>
                <br></br>
                <p>what do dogs and pennies have in common?</p>
                <p>they both have heads and tails!!!!!!!!!!</p>
                <img src={process.env.PUBLIC_URL + 'pictures/frank.jpg'} alt="My Image" />

            </div>

            <div className={styles.blogBrick1}>
                <h2>April 1</h2>
                <p>This is some new art I made</p>
                <p>it was made with stickers</p>

                <img src={process.env.PUBLIC_URL + 'pictures/newsartapril01.jpeg'} alt="My Image" />
            </div>
        </div>


    );
};

export default epsNews;
