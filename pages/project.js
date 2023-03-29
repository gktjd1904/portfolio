import Link from 'next/link'
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
                <div className={styles.text}>
                    <Link href={`https://bbubbu.vercel.app/`}>bbubbu 사이트 바로가기</Link>
                </div>
            </div>
            <div className={styles.eclipse}>
                <Eclipse></Eclipse>
                <div className={styles.text}>
                    <Link href={`https://bbubbu.vercel.app/`}>eclipse 사이트 바로가기</Link>
                </div>
            </div>
            <div className={styles.youtube}>
                <Youtube></Youtube>
                <div className={styles.text}>
                    <Link href={`https://bbubbu.vercel.app/`}>youtubeAPI 사이트 바로가기</Link>
                </div>
            </div>
            {/* <div className={styles.dflap}>
                <DfLap></DfLap>
            </div> */}
        </div >
    )
}

export default project