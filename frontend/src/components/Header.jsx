import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <>
        <header class="header">
            <div class="container">
                <div class="header__inner">

                    <div class="header__logo">
                        <a href="#" class="header__logo-link">
                            <img class="header__logo-img" src="/static/images/headerlogo.png" alt="logo" />
                        </a>
                    </div>

                    <nav class="menu">

                        <div class="menu__btn">
                            <span></span>
                        </div>


                        <ul class="menu__list">
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="aboutus.html">About Us</a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="services.html">Services</a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="work.html">Work</a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="newsgroup.html">News</a>
                            </li>
                            <li class="menu__list-item">
                                <a class="menu__list-link" href="contacts.html">Contacts</a>
                            </li>
                        </ul>
                    </nav>

                    <div class="header__call">
                        <img src="/static/images/call.png" alt="icon" class="header__call-icon" />

                        <div class="header__call-inner">
                            <div class="header__call-title">Call us</div>
                            <div class="header__call-phone">
                                <a href="tel:4055550128" class="header__phone-link">(405) 555-0128</a>
                            </div>
                        </div>

                    </div>

                    <div class="header__talk">
                        <img src="/static/images/talk.png" alt="icon" class="header__talk-icon" />

                        <div class="header__talk-inner">
                            <div class="header__talk-title">Talk to us</div>
                            <div class="header__talk-email">
                                <a href="email:hello@createx.com" class="header__email-link">hello@createx.com</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        </>
    );
}

export default Header;
