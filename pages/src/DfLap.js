import React, { useState } from 'react'
import styles from '@/styles/projectSwiper.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import swiper from "@/styles/swiper.module.scss";
import Image from 'next/image';

function DfLap() {

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
                        <h2>클론코딩</h2>
                        <p>설명설명1</p>
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
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default DfLap