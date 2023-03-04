import React from 'react';
import styles from './banner_ad.module.css';
function BannerAd() {
  return (
    <div className={styles.container}>
        <img src={require('../../resources/home-page-banner.png')} alt="banner" style={{width: '100%'}}/>
    </div>
  )
};

export default BannerAd