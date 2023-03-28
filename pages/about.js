import React, { useEffect, useState } from 'react'

import styles from '../styles/about.module.scss'

import Image from "next/image"

import backgroundIMG from '../public/img/BG_img_01.jpg';

import my1 from '../public/img/my/my1.png';
import my2 from '../public/img/my/my2.jpg';
import my3 from '../public/img/my/my3.jpg';
import my4 from '../public/img/my/my4.jpg';
import my5 from '../public/img/my/my5.jpg';
import my6 from '../public/img/my/my6.jpg';


import html from '../public/img/skill/html.png';
import css from '../public/img/skill/css.png';
import js from '../public/img/skill/javascript.png';
import next from '../public/img/skill/next.png';
import react from '../public/img/skill/react.png';
import scss from '../public/img/skill/scss.png';
import nextAuth from '../public/img/skill/nextAuth.png';
import mySql from '../public/img/skill/mySql.png';
import prisma from '../public/img/skill/prisma.png';
import mariaDB from '../public/img/skill/mariaDB.png';




const myImg = [my1, my2, my3, my4, my5, my6]

function about() {

    // const [num, setNum] = useState(0);

    // setInterval(() => {
    //     setNum(num + 1)
    // }, 3000)

    // console.log(num)

    return (
        <div className={styles.about}>
            <div className={styles.aboutCont}>
                <div className={styles.contLeft}>
                    <Image src={myImg[1]} alt=''></Image>
                </div>
                <div className={styles.contRight}>
                    <h1>안녕하세요.<br></br>
                        프론트앤드개발자 <span className={styles.spanA}>배하성</span> 입니다.</h1>
                    <br></br>
                    <p>하고 싶은 일이나 궁금한 것이 생기면 직접 부딪혀 보고,<br></br>
                        제 힘으로 알아내고 나서야 직성이 풀리는     웹 퍼블리셔 <span className={styles.spanA}>배하성</span> 입니다.<br></br>
                        머릿속으로 상상하던 구조와 애니메이션이
                        제 손끝에서 코드로써 완성될 때마다 크고 작은 성취감과
                        희열감을 느끼며 웹 개발이라는 분야에 대해 더 깊이 알고
                        싶고 잘해 내고 싶다는 생각이 들어 <span className={styles.spanB}>웹퍼블리셔</span>로의 이직을
                        결심하게 되었습니다.<br></br><br></br>
                        아직 많이 부족하지만 계속해서 변화하는 세태에 맞춰
                        자기 개발을 미루지 않는 기본기 탄탄한 웹 퍼블리셔이자
                        프론트엔드 개발자가 되겠습니다.</p>
                </div>
            </div>

            <div className={styles.skill}>
                <h1>🔶SKILLS</h1>
                <ul className={styles.skillsA}>
                    <li ><Image src={html} alt=''></Image></li>
                    <li><Image src={css} alt=''></Image></li>
                    <li><Image src={js} alt=''></Image></li>
                    <li><Image src={next} style={{ backgroundColor: 'white' }} alt=''></Image></li>
                    <li><Image src={react} alt=''></Image></li>
                </ul>
                <ul className={styles.skillsB}>
                    <li><Image src={scss} alt=''></Image></li>
                    <li><Image src={nextAuth} alt=''></Image></li>
                    <li><Image src={mySql} alt=''></Image></li>
                    <li><Image src={mariaDB} alt=''></Image></li>
                    <li><Image src={prisma} alt=''></Image></li>
                </ul>
            </div>
        </div >
    )
}

export default about