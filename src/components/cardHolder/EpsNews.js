import React from "react";
import styles from "../cardHolder/cardHolder.module.css";
// import newsartapril01 from 'catblog/CatBlog/src/pictures/newsartapril01.jpeg'

//get API data for cat of the day

const epsNews = () => {


    return (




        <div className={styles.epsnews}>

<div className={styles.blogBrick2}>
            <h2>October 20</h2>
            <p>Look at the cat surfer pic I found on the cat blog!!</p>
            <p></p>
            <img src={process.env.PUBLIC_URL + 'pictures/fancycat.png'} alt="My Image" />

        </div>


        <div className={styles.blogBrick1}>
            <h2>Oct 18</h2>
            <p>hi guys welcome back. today in school i learned a new joke</p>
            <p></p>
            <br></br>
            <p>why did the apple pie go to the dentist?</p>
            <br></br>
            <p>because it needed a filling</p>
            <img src={process.env.PUBLIC_URL + 'pictures/detail_Apple_Pie_3.jpg'} alt="My Image" />

            <br></br>
            <p><b><i>in other news...</i></b></p>

            <p>my dog turned 4 years old on oct 1st </p>
            <p>my birthday is oct 26 1 week</p>
            <p>i am excited i will turn 10</p>
            <p>slayyyyyyyyyyyyyyyy</p>


        </div>
        <div className={styles.blogBrick2}>
            <h2>January 26</h2>
            <p>I thought of a good joke </p>
            <p></p>
            <br></br>
            <p>joke of the day:</p>
            <br></br>
            <p>what did the cinderella fish wear to the ball?</p>
            <p>A glass fliper!!!!!!!!!</p>
            <img src={process.env.PUBLIC_URL + 'pictures/slipper.webp'} alt="My Image" />

        </div>

        <div className={styles.blogBrick1}>
            <h2>January 25 </h2>
            <p></p>
            <p>I have a good joke</p>
            <br></br>
            <p>joke of the day:</p>
            <br></br>
            <p>why did bike fall over?</p>
            <p>because it was too tired!!!</p>
            <img src={process.env.PUBLIC_URL + 'pictures/garneau-gros-louis-2-fat-bike.webp'} alt="My Image" />

        </div>

        <div className={styles.blogBrick2}>
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
