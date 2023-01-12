import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Hero.module.css";
import Navbar from "./UI/NavBar";

const Hero = () => {
  return (
    <div className={`px-4 row ` + styles.section}>
      <Navbar />
      <div className="pt-5 col-md-6">
        <h1
          className={styles["hero-header"] + ` display-md-1 p-4 mt-5 pe-md-5`}
        >
          Immersive Experiences that deliver
        </h1>
      </div>
    </div>
  );
};

export default Hero;
