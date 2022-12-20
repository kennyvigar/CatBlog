import Header from "./components/header/Header.js";
import Intro from "./components/header/Intro.js";

import "./App.css";
import CardHolder from "./components/cardHolder/CardHolder";

export default () => (
  <div className="App">
    
    <Header />
    <Intro />
    <CardHolder />

    <iframe //TODO - put this `iframe` into it's own component
      width="560" //560 x 340
      height="340"
      src="https://www.youtube.com/embed/tgbNymZ7vqY"
    ></iframe>
  </div>
);
