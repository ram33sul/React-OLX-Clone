import React from "react";
import styles from "./sub_footer.module.css";
function SubFooter() {
    return (
        <div className={styles.container}>
            <div className={styles.section1}>
                <span style={{fontWeight: 'bold'}} >Other countries</span> <br/><br />
                Indonesia - Pakistan - South Africa
            </div>
            <div className={styles.section2}>
                All rights reserved © 2006-2023 OLX
            </div>
        </div>
    )
};

export default SubFooter;