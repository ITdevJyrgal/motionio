import React, {useState} from "react";
import * as FaIcons from "react-icons/fa";
import Link from "next/link"
import {languages} from "../../constants/languages";
import {LOCALES} from "../../intl/locales";

// import "./../../styles/burgerMenu.css"

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    function showSideMenu() {
        setSidebar(!sidebar);
    }

    return (
        <>
            <div className="navbar2">
                <div to="#" className="menu-bars" onClick={showSideMenu}>
                    <FaIcons.FaBars className="menu-icon"/>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">

                        <li onClick={() => setSidebar(false)}>
                            <Link href={"/"}>
                                <a>
                                    Домой
                                </a>
                            </Link>

                        </li>
                        <li onClick={() => setSidebar(false)}>
                            <Link href={"/rates"}>
                                <a>
                                    Тарифы
                                </a>
                            </Link>

                        </li>
                        <li onClick={() => setSidebar(false)}>
                            <Link href={"/#services"}>
                                <a>
                                    Услуги
                                </a>
                            </Link>
                        </li>
                        <li onClick={() => setSidebar(false)}>
                            <Link href={"/#description"}>
                                <a>
                                    Контакты
                                </a>
                            </Link>
                        </li>

                        <div className="header__lang--buttons2">
                            {languages.map((el) => (
                                <button
                                    key={el.key}
                                    value={LOCALES[el.key]}>
                                    {el.text1}
                                    {el.text}
                                </button>
                            ))}
                        </div>
                    </ul>

                </nav>
            </div>
        </>
    );
}

export default Navbar;