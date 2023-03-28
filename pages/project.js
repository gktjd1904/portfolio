import React, { useState } from 'react'
import styles from '../styles/project.module.scss'
import BuuBuu from './src/BuuBuu'
import DfLap from './src/DfLap'
import Eclipse from './src/Eclipse'
import Portpolio from './src/Portpolio'
import Youtube from './src/Youtube'


function project() {


    return (
        <div className={styles.project}>
            {/* <div className={styles.text}>SWIPER</div> */}
            {/* <div className={styles.portpolio}>
                <Portpolio></Portpolio>
            </div> */}
            <div className={styles.bbubbu}>
                <BuuBuu></BuuBuu>
            </div>
            <div className={styles.eclipse}>
                <Eclipse></Eclipse>
            </div>
            <div className={styles.youtube}>
                <Youtube></Youtube>
            </div>
            {/* <div className={styles.dflap}>
                <DfLap></DfLap>
            </div> */}
        </div >
    )
}

export default project