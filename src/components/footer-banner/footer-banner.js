import React from 'react'
import styles from './footer-banner.module.css';
function FooterBanner() {
  return (
    <div className={styles.container}>
        <div className={styles.bannerImage}>

        </div>
        <div className={styles.section1}>
            <span style={{fontSize: '30px', fontWeight: 'bold'}}>
                TRY THE OLX APP
            </span>
            <br /><br />
                Buy, sell and find just about anything using the app on your mobile.
        </div>
        <div className={styles.section2}>
            GET YOUR APP TODAY
            <div className={styles.buttonContainer}>
                <img src={require('../../resources/appstore-logo.png')} alt='appstore' style={{height: '40px'}} />
                <img src={require('../../resources/googleplay-logo.png')} alt='googleplay' style={{height: '40px'}} />
            </div>
        </div>
    </div>
  )
}

export default FooterBanner