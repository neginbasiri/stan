import React from "react";
import styles from "./Header.module.css";
import { Link, Button, Text } from "../../atoms";

const Header = () => (
  <header className={styles.default}>
    <Text textStyle="large">Demo Streaming</Text>
    <div className={styles.headerColumn}>
      <Link href="/login">Login</Link>
      <Button>Start Free Trial</Button>
    </div>
  </header>
);

export default Header;
