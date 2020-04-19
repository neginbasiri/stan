import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { TitleBar, Image, Text } from "../../atoms";

import placeholderImage from "../../assets/placeholder.png";

const Home = () => (
  <div>
    <TitleBar><Text textStyle="medium">Popular Titles</Text></TitleBar>
    <div className={styles.wrapper}>
      <Link to="/series" className={styles.tile}>
        <div className={styles.imageWrapper}>
          <Image
            src={placeholderImage}
            alt="popular series"
            className={styles.image}
          ></Image>
          <Text className={styles.imageText} textStyle="imageCoverText">Series</Text>
        </div>

        <Text>Popular Series</Text>
      </Link>

      <Link to="/movies" className={styles.tile}>
        <div className={styles.imageWrapper}>
          <Image
            src={placeholderImage}
            alt="popular movies"
            className={styles.image}
          ></Image>
          <Text className={styles.imageText} textStyle="imageCoverText">Movies</Text>
        </div>

        <Text>Popular Movies</Text>
      </Link>
    </div>
  </div>
);

export default Home;
