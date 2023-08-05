import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>Todo List - ReactTS</div>
    </header>
  )
};

export default Header;