const LOGO_URL = `/lol-l-logo.png`;

import styles from "./Logo.module.css";

function Logo() {
  return (
    <img
      src={LOGO_URL}
      className={styles.img}
      alt="League of Legends - L - Logo"
    />
  );
}

export default Logo;
