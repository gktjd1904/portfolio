import React, { useState } from 'react'
import styles from '@/styles/projectSwiper.module.scss'
import portpolio from '@/styles/portpolioStyles.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import swiper from "@/styles/swiper.module.scss";
import Image from 'next/image';

import portpolio1 from '@/public/img/pj/portpolio1.png'
import portpolio2 from '@/public/img/pj/portpolio2.png'
import portpolio3 from '@/public/img/pj/portpolio3.png'
import portpolio4 from '@/public/img/pj/portpolio4.png'

function Portpolio() {

    const [num, setNum] = useState(0);


    function slideChange(e) {
        setNum(e.realIndex);
        console.log(e.realIndex)
    }


    return (
        <div className={styles.project}>
            <div className={styles.projectCont}>
                <div className={styles.leftCont}>
                    <div className={num === 0 ? styles.block : styles.none}>
                        <div className={portpolio.contA}>
                            <h2>My portpolio Page</h2>
                            <p>포트폴리오 페이지</p>
                        </div>
                    </div>
                    <div className={num === 1 ? styles.block : styles.none}>
                        <h2>설명설명2</h2>
                        <p>설명설명2</p>
                    </div>
                    <div className={num === 2 ? styles.block : styles.none}>
                        <h2>설명설명3</h2>
                        <p>설명설명3</p>
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
                            <SwiperSlide><Image src={portpolio1} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={portpolio2} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={portpolio3} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={portpolio4} alt=''></Image></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Portpolio