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


import github from '../public/img/skill/github.png';
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
import figma from '../public/img/skill/figma.png';
import communication from '../public/img/skill/communication.png';

import aboutme from '../public/img/my/aboutme.png';




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
                <div className={styles.me}><Image src={aboutme} alt='' />ABOUT ME</div>
                <div className={styles.contLeft}>
                    <Image src={myImg[5]} alt=''></Image>
                </div>
                <div className={styles.contRight}>
                    <h1>안녕하세요.<br></br>
                        프론트앤드개발자 <span className={styles.spanA}>배하성</span> 입니다.</h1>
                    <br />
                    <p> 하고 싶은 일이나 궁금한 것이 생기면 직접 부딪혀 보고,<br />
                        제 힘으로 알아내고 나서야 직성이 풀리는 프론트앤드개발자 <span className={styles.spanA}>배하성</span> 입니다.<br />
                        <br />
                        머릿속으로 상상하던 구조와 애니메이션이
                        제 손끝에서 코드로써 완성될 때마다 크고 작은 성취감과
                        희열감을 느끼며 프론트엔드 개발이라는 분야에 대해 더 깊이 알고
                        싶고  잘해 내고 싶다는 생각이 들어 <span className={styles.spanB}>프론트앤드개발자</span>로의 이직을
                        결심하게 되었습니다.<br /><br />
                        아직 많이 부족하지만 계속해서 변화하는 세태에 맞춰
                        자기 개발을 미루지 않는 기본기 탄탄한
                        개발자가 되겠습니다.</p>
                </div>
            </div>

            <div className={styles.bgTextBox}>
                <div className={styles.Text}>
                    <p> ABOUT SKILLS ABOUT SKILLS ABOUT SKILLS ABOUT SKILLS</p>
                </div>
            </div>

            <div className={styles.skill}>
                {/* 이용해서 할수있는거 */}
                <h1>🔥SKILLS</h1>
                <div className={styles.skillCont}>
                    <div className={styles.contLeft}>
                        <div className={styles.cont}>
                            <div><Image src={html} alt='' />HTML</div>
                            <p>
                                - 시멘틱 마크업<br />
                                - 웹 표준 및 웹 접근성 고려<br />
                                - 크로스 브라우징</p>
                        </div>
                        <div></div>
                        <div className={styles.cont}>
                            <div><Image src={css} alt='' />CSS</div>
                            <p>
                                - Pc / Mobile 레이아웃 구현<br />
                                - 미디어쿼리,반응형 작업<br />
                                - Transition / Animation활용<br />
                                - SCSS 사용 가능
                            </p>
                        </div>
                        <div className={styles.cont}>
                            <div><Image src={communication} alt='' style={{ marginRight: "1vw", paddingTop: "1vw", width: '4vw' }} />COMMYNI<br />CATION</div>
                            <p>
                                - github를 활용하여 팀프로젝트 진행 <br />
                                - Notion활용
                            </p>
                        </div>
                        <div className={styles.cont}>
                            <div><Image src={figma} alt='' style={{ paddingTop: "1vw" }} />FIGMA</div>
                            <p>
                                - 와이어프레임 제작 능력<br />
                            </p>
                        </div>
                    </div>
                    <div className={styles.contRight}>
                        <div className={styles.cont}>
                            <div><Image src={js} alt='' />JAVASCRIPT</div>
                            <p>
                                - 바닐라 자바스크립트<br />
                                - 기본 문법 이해, 동적 소스 작성<br />
                                - 오픈 소스 활용 및 수정<br />
                            </p>
                        </div>
                        <div className={styles.cont}>
                            <div><Image src={react} alt='' style={{ paddingTop: '10px', paddingRight: '5px' }} />REACT</div>
                            <p>
                                - API를 활용하여 youtube사이트 제작<br />
                                - next.js 가능?
                            </p>
                        </div>
                        {/* <div className={styles.cont}>
                            <div><Image src={scss} alt='' />SCSS</div>
                            <p>
                                - 설명설명
                            </p>
                        </div>
                        <div className={styles.cont}>
                            <div><Image src={html} alt='' />HTML</div>
                            <p>
                                - 설명설명
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default about


// {/* <div><Image src={html} alt=''></Image>HTML</div>