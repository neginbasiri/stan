import React from "react";
import styles from "./Text.module.css";

const Text = ({ children, className='', textStyle ,...rest }) => (
  <div className={`${className} ${styles[textStyle]}`} {...rest}>
    {children}
  </div>
);

Text.defaultProps = {
  textStyle: "default"
};

export default Text;
