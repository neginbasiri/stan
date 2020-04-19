import React from 'react'
import styles from './Button.module.css';

const Button = ({children, className, ...rest}) => <button className={styles[className]} {...rest}>{children}</button>


Button.defaultProps = {
    className: "default"
};

export default Button;