import React from 'react'

import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  const link = "https://github.com/Satish980/Nft-app-UI";
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on Github</p>
        </div>
        <button 
          className={styles.btnPrimary}
          onClick={() => window.open(link, '_blank')}
        >
          Source Code
        </button>
        <div className={styles.flexCenter}>
          <img
            src={assets.scene}
            alt="download_png"
            className={styles.fullImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Download