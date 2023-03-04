import React from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './footer.module.css';
function Footer() {
    const [jsxData, setJsxData] = useState([]);
    const footerData = useMemo(()=> { return {
        'POPULAR LOCATIONS': [
            'Kolkata',
            'Mumbai',
            'Chennai',
            'Pune',
        ],
        'TRENDING LOCATIONS': [
            'Bhubaneshwar',
            'Hyderabad',
            'Chandigarh',
            'Nashik',
        ],
        'ABOUT US': [
            'About OLX Group',
            'Careers',
            'Contact Us',
            'OLXPeople',
            'Waah Jobs',
        ],
        'OLX': [
            'Help',
            'Sitemap',
            'Legal & Privacy information',
            'Blog',
            'OLX Autos Sell Car',
        ]
        }},[]);
    const createData = (data)=>{
        const tempJsxData = []
        for(let heading in data){

            const res = (
            <div key={heading} className={styles.section1}>
                <div className={styles.heading}>
                    {heading}
                </div>
                <div className={styles.contents}>
                    {data[heading].map((content)=>{
                        return (<div className={styles.eachContent} key={content}> {content} </div>)
                    })}
                </div>
            </div>
            )
            tempJsxData.push(res);
        }
        return tempJsxData;
    }

    useEffect(()=>{
        const jsxData = createData(footerData);
        setJsxData(jsxData);        
    },[footerData]);

  return (
    <div className={styles.container}>
        {jsxData}
        <div className={styles.section1}>
            <div className={styles.heading}>
                FOLLOW US
            </div>
            <img src={require('../../resources/footer-follow-us.png')} alt='social media icon' style={{width: '120px', cursor: 'pointer'}} />
            <div className={styles.buttonContainer}>
                <img src={require('../../resources/googleplay-logo.png')} alt='google play' style={{width: '90px'}} />
                <img src={require('../../resources/appstore-logo.png')} alt='app store' style={{width: '90px'}} />
            </div>
        </div>
    </div>
  )
};

export default Footer;