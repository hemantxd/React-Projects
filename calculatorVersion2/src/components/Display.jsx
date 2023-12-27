import React from "react";
import styles from "./Display.module.css";
function Display({ displayVal }) {
  return (
    <input type="text" className={styles.display} value={displayVal} readOnly />
  );
}

export default Display;
