import React from "react";
import styles from "./Footer.module.css";
import { Link, Image } from "../../atoms";
import facebook from "../../assets/social/facebook-white.svg";
import instagram from "../../assets/social/instagram-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import apple from "../../assets/store/app-store.svg";
import play from "../../assets/store/play-store.svg";
import windows from "../../assets/store/windows-store.svg";

const Footer = ({ className }) => (
  <footer className={styles[className]}>
    <div className={styles.linkRow}>
      <Link href="/">Home</Link>

      <Link href="/">Terms & Conditions</Link>

      <Link href="/">Privacy Policy</Link>
     
      <Link href="/">Collection Statement</Link>

      <Link href="/">Help</Link>
      
      <Link href="/">Manage Account</Link>
    </div>
    <div>Copyright &copy; 2016 DEMO Streaming. All rights reserved.</div>
    <div className={styles.imageRow}>
      <div className={styles.socialIcons}>
        <Image src={facebook} className={styles.socialIcon}></Image>
        <Image src={instagram} className={styles.socialIcon}></Image>
        <Image src={twitter} className={styles.socialIcon}></Image>
      </div>
      <div className={styles.appIcons}>
        <Image src={apple} className={styles.appIcon}></Image>
        <Image src={windows} className={styles.appIcon}></Image>
        <Image src={play} className={styles.appIcon}></Image>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = {
  className: "default"
};
export default Footer;
