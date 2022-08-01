import React from "react";

import * as styles from "./socials.module.css";

export function Socials() {
  return (
    <>
      <a href="mailto:hi@imanhle.com" className={styles.link}>
        E: hi@imanhle.com
      </a>
      <a href="https://www.linkedin.com/in/anhvietle/" className={styles.link}>
        L: in/anhvietle
      </a>
      <a href="https://github.com/Haizzz/" className={styles.link}>
        G: @haizzz
      </a>
    </>
  );
}
