import React from 'react'
import { Link } from "react-router-dom";
import styles from './Header.module.css'
// import image from './header/layout/img/Group.svg'

const Header = () => {
    return (
        <>
        <div className="container">
            <div className="row">
            <header className={styles.header}>
                <div className={styles.header__logo}>
                <img src="{image}" alt="img"/>
                </div>
                <div className={styles.header__menu}>
                    <ul>
                        <li><Link>Про нас</Link></li>
                        <li><Link>Дослідження</Link></li>
                        <li><Link>Тренди</Link></li>
                        <li><Link>Контакти</Link></li>
                        <li><Link>Підтримати</Link></li>
                    </ul>
                </div>
                <div className={styles.header__search}>
                    <input type="text" placeholder='search'/>
                </div>
                <div className={styles.language}>
                    <p>UA</p>
                </div>
            </header>
            </div>
        </div>
        </>

    )
}

export default Header
