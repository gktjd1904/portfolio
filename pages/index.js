import React, { useState } from 'react';
import styles from '@/styles/main.module.scss';
import header from '@/styles/head.module.scss';

import Link from 'next/link';

import Image from "next/image"
import backgroundIMG from '../public/img/BG_img_01.jpg';
import btnIMG from '../public/img/right.png';


export default function Home() {


  const [menu, setMenu] = useState(true);

  function menuBTN() {
    setMenu(!menu)
  }

  return (
    <div className={styles.cont}>
      <div>
        <Image className={menu ? styles.bgIMG : `${styles.bgIMG} ${styles.action}`} src={backgroundIMG} alt=''></Image>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={menu ? styles.fontBox : `${styles.fontBox} ${styles.action}`}>
            <p>H</p>
            <span className={menu ? styles.spanA : `${styles.spanA} ${styles.action}`}>ELLO THIS IS</span>
            <span className={menu ? styles.spanB : `${styles.spanB} ${styles.action}`}>A SEONG</span>
          </div>

          <div className={menu ? styles.fontBox : `${styles.fontBox} ${styles.action}`}>
            <p>B</p>
            <span className={menu ? styles.spanA : `${styles.spanA} ${styles.action}`}>EA HASEONG&#39;s</span>
            <span className={menu ? styles.spanB : `${styles.spanB} ${styles.action}`}>AE</span>
          </div>

          <div className={menu ? styles.fontBox : `${styles.fontBox} ${styles.action}`}>
            <p>P</p>
            <span>ORTFOLIO</span>
          </div>

        </div>
      </div>


      <div className={styles.menuBTN}>
        <div onClick={menuBTN} className={styles.toogle}>
          <span className={menu ? styles.toogleSpan : `${styles.toogleSpanA}`}></span>
          <span className={menu ? styles.toogleSpan : `${styles.toogleSpanB} ${styles.action}`}></span>
          <span className={menu ? styles.toogleSpan : `${styles.toogleSpanC} ${styles.action}`}></span>
        </div>
      </div>

      <div className={menu ? styles.menu : `${styles.menu} ${styles.action}`}>
        <div className={header.menuHeader}>
          <Link href="/">HARUBRO</Link>
        </div>

        <div className={styles.menuCont}>
          <Link href='/'>MAIN</Link>
          <Link href='/project'>PROJECT</Link>
          <Link href='/about'>ABOUT/SKILL</Link>

          <div className={styles.info}>
            <p>e-mail : gktjd1904@naver.com</p>
            <p>Phone : 010-4276-3676</p>
          </div>
        </div>
      </div>


      <div className={styles.bgTextBox}>
        <div className={styles.Text}>
          <p>HARUBRO HARUBRO HARUBRO HARUBRO HARUBRO</p>
        </div>
      </div>

      {/* <div className={styles.imgBox}> */}

      {/* </div> */}
    </div>
  )
}

