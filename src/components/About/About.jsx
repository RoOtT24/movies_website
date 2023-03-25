import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
  <div>
  <div className={styles.aboutSection}>
    <h1>About Us Page</h1>
    <p>Some text about who we are and what we do.</p>
    <p>Resize the browser window to see that this page is responsive by the way.</p>
  </div>
  <h2 style={{textAlign: 'center' , marginTop: '3rem'}}>Our Team</h2>
  <div className="row d-flex align-items-center justify-content-center">
    <div className={styles.column}>
      <div className="card bg-secondary">
        <img src="/assets/img/janeDoe.jpg" alt="Jane" style={{width: '100%', height:'35rem'}} />
        <div className={styles.container}>
          <h2>Jane Doe</h2>
          <p className={styles.title}>CEO &amp; Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button className={styles.button}>Contact</button></p>
        </div>
      </div>
    </div>
    <div className={styles.column}>
      <div className="card bg-secondary">
        <img src="/assets/img/mikeRoss.jpg" alt="Jane" style={{width: '100%', height:'35rem'}} />
        <div className={styles.container}>
          <h2>Mike Ross</h2>
          <p className={styles.title}>Art Director</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>mike@example.com</p>
          <p><button className={styles.button}>Contact</button></p>
        </div>
      </div>
    </div>
    <div className={styles.column}>
      <div className="card bg-secondary">
        <img src='/assets/img/johnDoe.jpg' alt="John" style={{width: '100%', height:'35rem'}} />
        <div className={styles.container}>
          <h2>John Doe</h2>
          <p className={styles.title}>Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>john@example.com</p>
          <p><button className={styles.button}>Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
