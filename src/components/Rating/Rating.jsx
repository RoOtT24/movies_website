import React from "react";
import styles from "./Rating.module.css";

export const Rating = () => {
  const onClick = (e)=>{
    console.log(e.target)
  }
  return (
    <fieldset className={styles.rate}>
      <input onClick={onClick} type="radio" id="rating10" name="rating" defaultValue={10} />
      <label htmlFor="rating10" title="5 stars" />
      <input onClick={onClick} type="radio" id="rating9" name="rating" defaultValue={9} />
      <label className={styles.half} htmlFor="rating9" title="4 1/2 stars" />
      <input onClick={onClick} type="radio" id="rating8" name="rating" defaultValue={8} />
      <label htmlFor="rating8" title="4 stars" />
      <input onClick={onClick} type="radio" id="rating7" name="rating" defaultValue={7} />
      <label className={styles.half} htmlFor="rating7" title="3 1/2 stars" />
      <input onClick={onClick} type="radio" id="rating6" name="rating" defaultValue={6} />
      <label htmlFor="rating6" title="3 stars" />
      <input onClick={onClick} type="radio" id="rating5" name="rating" defaultValue={5} />
      <label className={styles.half} htmlFor="rating5" title="2 1/2 stars" />
      <input onClick={onClick} type="radio" id="rating4" name="rating" defaultValue={4} />
      <label htmlFor="rating4" title="2 stars" />
      <input onClick={onClick} type="radio" id="rating3" name="rating" defaultValue={3} />
      <label className={styles.half} htmlFor="rating3" title="1 1/2 stars" />
      <input onClick={onClick} type="radio" id="rating2" name="rating" defaultValue={2} />
      <label htmlFor="rating2" title="1 star" />
      <input onClick={onClick} type="radio" id="rating1" name="rating" defaultValue={1} />
      <label className={styles.half} htmlFor="rating1" title="1/2 star" />
    </fieldset>
  );
};
