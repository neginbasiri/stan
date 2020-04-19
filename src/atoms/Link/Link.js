import React from "react";
import styles from "./Link.module.css";

const Link = ({ children, className="default", ...rest }) => (
  <a className={styles[className]} {...rest}>
    {children}
  </a>
);

Link.defaultProps = {
  className: "default"
};

export default Link;
