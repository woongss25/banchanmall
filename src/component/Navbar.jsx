import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';


const Navbar = () => {
    const [hoverMenu, setHoverMenu] = useState(null);
    const menuData = [
        {
            label: "밑반찬",
            path: "/side-1",
            submenu: [
                { label: "나물·무침", path: "/side-1" },
                { label: "조림·볶음", path: "/side-2" }
            ]
        },
        {
            label: "메인요리",
            path: "/main-1",
            submenu: [
                { label: "구이·볶음·찜", path: "/main-1" },
                { label: "전골", path: "/main-2" }
            ]
        },
        {
            label: "국·탕·찌개",
            path: "/soup-1",
            submenu: [
                { label: "국·탕", path: "/soup-1" },
                { label: "찌개", path: "/soup-2" }
            ]
        },
        {
            label: "샐러드",
            path: "/salad"
            // submenu 없음
        }
    ];

    return (
        <div className='gnbArea'>
            <ul className={styles.gnb}>
                {menuData.map((menu, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => setHoverMenu(index)}
                        onMouseLeave={() => setHoverMenu(null)}
                        className={styles.menuItem}
                    >
                        <Link to={menu.path}>{menu.label}</Link>
                        {/* sub Menu */ }
                        {hoverMenu === index && menu.submenu && (
                            <ul className={styles.subMenu}>
                                {menu.submenu.map((sub, idx) => (
                                    <li key={idx}>
                                        <Link to={sub.path}>{sub.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Navbar
