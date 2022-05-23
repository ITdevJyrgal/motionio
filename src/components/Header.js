import {useIntl} from "react-intl";
import {languages} from "../../constants/languages";
import {LOCALES} from "../../intl/locales";
import {setLocale} from "../../redux/reducers/main";
import {useDispatch} from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {logo} from '../../constants/main'
import {useEffect, useState} from "react";
import BurgerMenu from "./../components/burgerMenu";
// import logo from '../../assets/images/logo-3.svg'


const Header = () => {
    const {formatMessage, locale} = useIntl();
    const dispatch = useDispatch()
    const [bg, setBg] = useState(false)
    // const [currentClick, setCurrentClick] = useState('')
    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setBg(true)
        } else {
            setBg(false)
        }
    }
    //
    // useEffect(()=> {
    //     languages?.map(el => (
    //         setCurrentClick(el)
    //     ))
    // })
    // console.log(currentClick)
    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })


    return (
        <header id="header" className={bg ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="header">
                    <Link href={'/'}>
                        <a  className="header__logo">
                            <Image src={logo} alt="logo" className="header__logo--img"/>
                        </a>
                    </Link>

                    <nav className="header__nav">
                        <Link href={'/faq'}><a className="header__nav--item">FAQ</a></Link>
                        <Link href={'#services'}><a className="header__nav--item">{formatMessage({id: 'services'})}</a></Link>
                        <Link href={'#team'}><a className="header__nav--item">{formatMessage({id: 'about'})}</a></Link>
                        <Link href={'all-projects'}><a
                            className="header__nav--item">{formatMessage({id: 'projects'})}</a></Link>
                        <Link href={'/clients'}><a
                            className="header__nav--item">{formatMessage({id: 'clients'})}</a></Link>
                        <Link href={'/team'}><a className="header__nav--item">{formatMessage({id: 'team'})}</a></Link>
                    </nav>
                    <div
                        aria-current="page"
                        value={locale}
                        onClick={(e) => dispatch(setLocale(e.target.value))}
                        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                        className="header__lang  "
                    >
                        <div className="header__lang--buttons">
                            {languages.map((el) => (
                                <button
                                    className={LOCALES[el.key] === locale ? "header__lang--buttons__buttonactive" :"header__lang--buttons__button"}
                                    key={el.key}
                                    value={LOCALES[el.key]}
                                >
                                    {el.text1}
                                    {el.text}
                                </button>
                            ))}
                        </div>


                        <Link href={'/contact'}>
                            <a className="header__contact"
                            >{formatMessage({id: 'contact'})}
                            </a>
                        </Link>
                        <BurgerMenu/>

                    </div>
                    {/*<div id="app-cover">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="toggle-button-cover">*/}
                    {/*            <div className="button-cover">*/}
                    {/*                <div className="header__lang--buttons">*/}
                    {/*                        <div*/}
                    {/*                            className="button r"*/}
                    {/*                            id="button-1"*/}
                    {/*                            aria-current="page"*/}
                    {/*                            value={locale}*/}
                    {/*                            onClick={(e) => dispatch(setLocale(e.target.value))}*/}
                    {/*                        >*/}
                    {/*                            {languages.map((el)=> {*/}
                    {/*                                return (*/}
                    {/*                                    <div key={el.key}>*/}
                    {/*                                        <input*/}
                    {/*                                            type="checkbox"*/}
                    {/*                                            name="language"*/}
                    {/*                                            className="checkbox"*/}
                    {/*                                        />*/}
                    {/*                                        <div className="knobs"/>*/}
                    {/*                                        <div className="layer"/>*/}
                    {/*                                    </div>*/}


                    {/*                                )*/}
                    {/*                            })}*/}

                    {/*                        </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>

            </div>
        </header>

    );
};

export default Header;