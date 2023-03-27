import React, { useState } from 'react'
import styles from '@/styles/projectSwiper.module.scss'
import eclipseStyles from '@/styles/eclipseStyles.module.scss';

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import swiper from "@/styles/swiper.module.scss";
import Image from 'next/image';
import Link from 'next/link';

import eclipse1 from '@/public/img/eclipse/eclipse1.png'
import eclipse2 from '@/public/img/eclipse/eclipse2.png'
import eclipse3 from '@/public/img/eclipse/eclipse3.png'
import eclipse4 from '@/public/img/eclipse/eclipse4.png'
import eclipse5 from '@/public/img/eclipse/eclipse5.png'

import html from '@/public/img/skill/html.png';
import js from '@/public/img/skill/javascript.png';
import next from '@/public/img/skill/next.png';
import react from '@/public/img/skill/react.png';
import css from '@/public/img/skill/css.png';
import scss from '@/public/img/skill/scss.png';

function Eclipse() {

    const [num, setNum] = useState(0);

    function slideChange(e) {
        setNum(e.realIndex);
        console.log(e.realIndex)
    }


    return (
        <div className={styles.project}>
            <div className={styles.projectCont}>
                <div className={styles.leftCont}>
                    <div className={num < 2 ? styles.block : styles.none}>
                        <div className={eclipseStyles.contA}>
                            <h2>Eclipse renewal</h2>
                            <p>팀프로젝트</p>
                            <p>기존 정적인 이클립스 사이트를 좀 더 상쾌하게 개선</p>
                        </div>
                    </div>
                    <div className={num < 2 ? styles.block : styles.none}>
                        <div className={eclipseStyles.contB}>
                            <h2>🔥SKILLS</h2>
                            <ul>
                                <li><Image alt='' src={html}></Image></li>
                                <li><Image alt='' src={css}></Image></li>
                                <li><Image alt='' src={js}></Image></li>
                                <li><Image alt='' src={scss}></Image></li>
                            </ul>
                        </div>
                    </div>
                    <div className={num === 2 || num === 3 ? styles.block : styles.none}>
                        <div className={eclipseStyles.contC}>
                            <h2>Development Issue</h2>
                            <h3>🤔이벤트의 동시실행시 충돌로인한 오류발생</h3><br></br>
                            <p>😏중복이벤트 최대한 제거, 현재화면에서 발생하지 않는 이벤트 종료</p>
                            <br></br><br></br>
                            <h3>🤔스크롤이 거의 없는 페이지로 설계했기 때문에, 자바스크립트 이벤트가
                                실행되는 타이밍이 꼬임</h3><br></br>
                            <p>😏자바스크립트 함수와 setTimeout, setInterval등 딜레이를 관리할수있는 명령어를 활용</p>
                        </div>
                    </div>
                    <div className={num === 4 ? styles.block : styles.none}>
                        <div className={eclipseStyles.contD}>
                            <h2>📆개발 기간</h2>
                            <p>2022.12.22~2023.01.05</p>
                            <Link href={`https://inhoopark.github.io/C_Team/`}>이클립스 사이트 바로가기</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.rightCont}>
                    <div className={swiper.swiper}>
                        <Swiper
                            style={{
                                "--swiper-pagination-color": "#ddd",
                            }}
                            onSlideChange={slideChange}
                            loop={true}
                            pagination={{
                                type: "progressbar",
                            }}
                            // navigation={true}
                            modules={[Pagination]}
                            className={swiper.mySwiper}
                        >
                            <SwiperSlide><Image src={eclipse1} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={eclipse2} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={eclipse3} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={eclipse4} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={eclipse5} alt=''></Image></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Eclipse