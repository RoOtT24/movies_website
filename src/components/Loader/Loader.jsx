import React from "react";
import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.loader}>
    <div className={styles.spinner}>
      <div className={styles.cube1} />
      <div className={styles.cube2} />
    </div>
    </div>
  );
};
