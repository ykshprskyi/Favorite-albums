'use client';
import "./Header.scss";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openClickHandler = (e) => {
        e.stopPropagation();
        isOpen ? setIsOpen(false) : setIsOpen(true);

    };
    return (<header className="header">
        <div className="header-title">
            <a className="header-title__link" href="/">My favorite albums</a>
        </div>
        <div className={`header-nav ${isOpen ? 'is-open' : ``}`}>
            <div className={`header-nav__btn ${isOpen ? 'is-open' : ``}`} onClick={openClickHandler}>
                <span className='btn_bar'></span>
            </div>
            <nav className="header-nav__links">
                <a className="header-nav__links__item" href="#iowa" onClick={openClickHandler}>Iowa</a>
                <a className="header-nav__links__item" href="#seas-of-cheese" onClick={openClickHandler}>Sailing the Seas of Cheese</a>
                <a className="header-nav__links__item" href="#evil-empire" onClick={openClickHandler}>Evil Empire</a>
                <a className="header-nav__links__item" href="#subscribe-form" onClick={openClickHandler}>Subscribe Form</a>

            </nav>
        </div>
    </header>)
}
export default Header;