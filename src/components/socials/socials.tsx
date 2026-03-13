import React from "react";

import * as styles from "./socials.module.css";

export function Socials() {
  return (
    <>
      <a href="mailto:hi@imanhle.com" className={styles.link}>
        Email: hi@imanhle.com
      </a>
      <a href="https://www.linkedin.com/in/anhvietle/" className={styles.link}>
        LinkedIn: in/anhvietle
      </a>
      <a href="https://open.substack.com/pub/anhvietle" className={styles.link}>
        Substack: substack/anhvietle
      </a>
      <a href="https://github.com/Haizzz/" className={styles.link}>
        GitHub: @haizzz
      </a>
    </>
  );
}
