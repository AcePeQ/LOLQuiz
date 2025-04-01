import Logo from "../logo/Logo";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <h1 className={styles.title}>The League of Legends Quiz</h1>
    </header>
  );
}

export default Header;
