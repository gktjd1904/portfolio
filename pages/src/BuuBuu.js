import React, { useState } from 'react'
import styles from '@/styles/projectSwiper.module.scss'
import bbubbuStyles from '@/styles/bbubbuStyles.module.scss'

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import swiper from "@/styles/swiper.module.scss";
import Image from 'next/image';

import bbubbu1 from '@/public/img/bbubbu/bbubbu1.png'
import bbubbu2 from '@/public/img/bbubbu/bbubbu2.png'
import bbubbu3 from '@/public/img/bbubbu/bbubbu3.png'
import bbubbu4 from '@/public/img/bbubbu/bbubbu4.png'
import bbubbu5 from '@/public/img/bbubbu/bbubbu5.png'
import bbubbu6 from '@/public/img/bbubbu/bbubbu6.png'
import bbubbu7 from '@/public/img/bbubbu/bbubbu7.png'

import js from '@/public/img/skill/javascript.png';
import next from '@/public/img/skill/next.png';
import react from '@/public/img/skill/react.png';
import scss from '@/public/img/skill/scss.png';
import nextAuth from '@/public/img/skill/nextAuth.png';
import mySql from '@/public/img/skill/mySql.png';
import prisma from '@/public/img/skill/prisma.png';
import mariaDB from '@/public/img/skill/mariaDB.png';
import Link from 'next/link';

function BuuBuu() {

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
                        <div className={bbubbuStyles.contA}>
                            <h2>BBUBBU</h2>
                            <p>팀프로젝트</p>
                            <p>예비 신랑, 신부들이 온라인을 통해 서로 정보를 공유하고 소통할수 있는 sns제작</p>
                            <h3>🔥SKILLS</h3>
                            <ul>
                                <li><Image alt='' src={scss}></Image></li>
                                <li><Image alt='' src={react}></Image></li>
                                <li><Image alt='' src={js}></Image></li>
                                <li><Image alt='' src={nextAuth}></Image></li>
                                <li><Image alt='' src={prisma}></Image></li>
                                <li><Image alt='' src={mySql}></Image></li>
                                <li><Image alt='' src={mariaDB}></Image></li>
                                <li><Image alt='' src={next} style={{ backgroundColor: 'white' }}></Image></li>
                            </ul>
                            {/* <p>-회원가입</p>
                        <p>-로그인</p>
                        <p>-SDM페이지</p> */}
                        </div>
                    </div>
                    <div className={num === 2 || num === 3 ? styles.block : styles.none}>
                        <div className={bbubbuStyles.contB}>
                            <h2>BBUBBU</h2>
                            <p>- 회원가입 로그인 구현</p>
                            <p>- NextAuth를 사용하여 로그인구현</p>
                            <p>- Prisma로 회원 데이터 관리</p>
                            <p>- CRUD를 사용해서 체크리스트, 커뮤니티 페이지 구현</p>
                        </div>
                    </div>
                    <div className={num === 4 || num === 5 ? styles.block : styles.none}>
                        <div className={bbubbuStyles.contC}>
                            <h2>Development Issue</h2>
                            <h3>🤔좋아요 기능 오류</h3><br></br>
                            <p>😏유저에 따라 좋아요가 다르게 보여야하기 때문에, 좋아요 기능의
                                테이블을 따로 분리 게시글의  id값과 유저의 정보를 저장해 filter메서드를 사용
                                <br></br><br></br>
                                <h3>🤔canvas이미지 저장시 CORS오류</h3>
                                <p>😏배포 후 도메인이 달라져서 해결<br></br>---(개발환경에서 canvas에 외부 이미지가 들어가면 보안상의 이
                                    유로 CORS오류가 뜬다)</p>
                            </p>
                        </div>
                    </div>
                    <div className={num > 5 ? styles.block : styles.none}>
                        <div className={bbubbuStyles.contD}>
                            <h2>📆개발 기간</h2>
                            <p>2023.02.15 ~ 2023.03.20</p>
                            <Link href={`https://bbubbu.vercel.app/`}>bbubbu 사이트 바로가기</Link>
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
                            <SwiperSlide><Image src={bbubbu1} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={bbubbu2} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={bbubbu3} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={bbubbu4} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={bbubbu5} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={bbubbu6} alt=''></Image></SwiperSlide>
                            <SwiperSlide><Image src={bbubbu7} alt=''></Image></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default BuuBuu