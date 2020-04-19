import React from 'react';
import styles from './TitleBar.module.css';

const TitleBar = ({children, className}) => <div className={styles[className]}>{children}</div>

TitleBar.defaultProps = {
    className: "default"
}

export default TitleBar;