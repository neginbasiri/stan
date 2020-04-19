import React from "react";
import styles from './Image.module.css';

const Image = ({ className, alt, ...rest }) => (
  <img className={`${className} ${styles.contain}`} alt={alt} {...rest} />
);

export default Image;
