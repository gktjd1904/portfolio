import React, { useState } from 'react'
import styles from '@/styles/projectSwiper.module.scss'
import youtubeStyles from '@/styles/youtubeStyles.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

import swiper from "@/styles/swiper.module.scss";
import Image from 'next/image';

import js from '@/public/img/skill/javascript.png';
import react from '@/public/img/skill/react.png';
import scss from '@/public/img/skill/scss.png';

import youtube1 from '@/public/img/youtube/youtube1.png'
import youtube2 from '@/public/img/youtube/youtube2.png'
import youtube3 from '@/public/img/youtube/youtube3.png'
import youtube4 from '@/public/img/youtube/youtube4.png'
import Link from 'next/link';

function Youtube() {

    const [num, setNum] = useState(0);

    function slideChange(e) {
        setNum(e.realIndex);
        console.log(e.realIndex)
    }


    return (
        <div className={styles.project}>
            <div className={styles.projectCont}>
                <div className={styles.leftCont}>
                    <div className={num === 0 || num === 1 ? styles.block : styles.none}>
                        <div className={youtubeStyles.contA}>
                            <h2>YoutubeAPI</h2>
                            <p>React로 youtube사이트 만들어보기</p>
                            <h3>🔥SKILLS</h3>
                            <ul>
                                <li><Image alt='' src={scss}></Image></li>
                                <li><Image alt='' src={react}></Image></li>
                                <li><Image alt='' src={js}></Image></li>
                            </ul>
                        </div>
                    </div>
                    <div className={num === 2 ? styles.block : styles.none}>
                        <div className={youtubeStyles.contB}>
                            <h2>YoutubeAPI</h2>
                            <p>- Youtube API 사용</p>
                            <p>- 검색기능</p>
                            <p>- React Query와 React Router 사용</p>
                            <p>- SCSS를 사용하여 반응형 UI</p>
                        </div>
                    </div>
                    <div className={num === 3 ? styles.block : styles.none}>
                        <div className={youtubeStyles.contC}>
                            <h2>📆개발 기간</h2>
                            <p>2023.01.09 ~ 2023.02.06</p>
                            <Link href={`#`}>youtube 사이트 바로가기</Link>
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
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            // navigation={true}
                            modules={[Pagination, Autoplay]}
                            className={swiper.mySwiper}
                        >
                            <SwiperSlide><Image src={youtube1} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={youtube2} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={youtube3} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={youtube4} alt=''></Image></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Youtube