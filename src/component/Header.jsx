import React from 'react'
import styles from './Header.module.css'
import logoImg from '../img/logo.png'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header>
        <div className={styles.inner}>
            <h1 className={styles.logo}>
                <Link to ="/">
                    <img src={logoImg} alt="로고" />
                </Link>
            </h1>
            <Navbar />
        </div>
    </header>
  )
}

export default Header