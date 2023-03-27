import Link from 'next/link'
import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import styles from '@/styles/head.module.scss';

function Header() {

    // const [up, setUp] = useState(0)

    // const updateScroll = (e) => {
    //     setUp(window.scrollY)
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', updateScroll);
    // })

    // console.log(up)
    return (
        <div className={styles.header} >
            <Link href="/">HARUBRO</Link>
        </div>
    )
}

export default Header