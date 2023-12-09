import {Link} from 'react-router-dom';


const Footer = () => {
    return(
        <>
            <footer class="footer">
            <div class="container">

                <div class="footer__top">

                    <div class="footer__wrapper-left">
                        <div class="footer__top-left">
                            <div class="footer__logo">
                                <a href="#" class="footer__logo-link">
                                    <img class="footer__logo-img" src="/static/images/footerlogo.png" alt="logo" />
                                </a>
                            </div>

                            <div class="footer__wrapper-nav">
                                <nav class="footer__nav">
                                    <ul class="footer__ul">
                                        <li class="footer__li">
                                            <a href="#" class="footer__icon-link">
                                                <img src="/static/images/whatsapp.png" alt="whatsapp" class="footer__icon-img" />
                                            </a>
                                        </li>
                                        <li class="footer__li">
                                            <a href="#" class="footer__icon-link">
                                                <img src="/static/images/messanger.png" alt="messanger" class="footer__icon-img" />
                                            </a>
                                        </li>
                                        <li class="footer__li">
                                            <a href="#" class="footer__icon-link">
                                                <img src="/static/images/facebook.png" alt="facebook" class="footer__icon-img" />
                                            </a>
                                        </li>
                                        <li class="footer__li">
                                            <a href="#" class="footer__icon-link">
                                                <img src="/static/images/twitter.png" alt="twitter" class="footer__icon-img" />
                                            </a>
                                        </li>
                                        <li class="footer__li">
                                            <a href="#" class="footer__icon-link">
                                                <img src="/static/images/youtube.png" alt="youtube" class="footer__icon-img" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <p class="footer__top-text">
                            Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are
                            proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for
                            construction sphere.
                        </p>
                    </div>


                    <div class="footer__top-right">
                        <h3 class="footer__right-title">Let’s stay in touch</h3>

                            <input type="text" class="footer__input" placeholder="Your email address " />
                            <button class="footer__btn">SUBSCRIBE</button>


                        <p class="footer__right-text">
                            *Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.
                        </p>
                    </div>
                </div>

                <div class="footer__inner">
                    <div class="footer__office">
                        <h4 class="footer__office-title">HEAD OFFICE</h4>
                        <ul class="footer__office-list">
                            <li class="footer__office-item">
                                <span class="footer__office-span">Address:</span>
                                <a href="contacts.html" class="footer__office-link">8502 Preston Rd. Inglewood, New York</a>
                            </li>
                            <li class="footer__office-item">
                                <span class="footer__office-span">Call:</span>
                                <a href="tel:4055550128" class="footer__office-link">(405) 555-0128</a>
                            </li>
                            <li class="footer__office-item">
                                <span class="footer__office-span">Email:</span>
                                <a href="email:hello@createx.com" class="footer__office-link">hello@createx.com</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__about">
                        <h4 class="footer__about-title">WHO WE ARE</h4>
                        <ul class="footer__about-list">
                            <li class="footer__about-item">
                                <a href="aboutus.html" class="footer__about-link">About Us</a>
                            </li>
                            <li class="footer__about-item">
                                <a href="positions.html" class="footer__about-link">Available Positions</a>
                            </li>
                            <li class="footer__about-item">
                                <a href="contacts.html" class="footer__about-link">Contacts</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__experience">
                        <h4 class="footer__experience-title">OUR EXPERIENCE</h4>
                        <ul class="footer__experience-list">
                            <li class="footer__experience-item">
                                <a href="services.html" class="footer__experience-link">Services</a>
                            </li>
                            <li class="footer__experience-item">
                                <a href="work.html" class="footer__experience-link">Work</a>
                            </li>
                            <li class="footer__experience-item">
                                <a href="newsgroup.html" class="footer__experience-link">News</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer__rights">
                    <div class="footer__rights-copy">© All rights reserved. Made with</div>
                    <img src="/static/images/copy.png" alt="icon" class="footer__rights-img" />
                    <div class="footer__rights-copy">by Createx Studio </div>

                    <p class="footer__rights-text">GO TO TOP</p>
                    <div class="footer__wrapper-btn">
                        <a href="#" class="footer__rights-btn">
                            <img src="/static/images/top.png" alt="image" class="footer__rights-top" />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
        </>
    );
}

export default Footer;
