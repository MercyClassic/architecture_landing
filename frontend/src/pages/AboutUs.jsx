import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';

const AboutUs = () => {
    return(
        <>
        <Header />

        <main class="main">

            <div class="breadcrumbs">
                <div class="container">
                    <ul class="breadcrumbs__list">
                        <li class="breadcrumbs__item">
                            <a href="index.html" class="breadcrumbs__link">Homepage</a>
                        </li>
                        <span class="breadcrumbs__link--active">/</span>
                        <li class="breadcrumbs__item">
                            <a href="aboutus.html" class="breadcrumbs__link--active ">About us</a>
                        </li>
                    </ul>
                </div>
            </div>


            <section class="aboutus">
                <div class="container">
                    <h2 class="aboutus__title">about us</h2>
                    <p class="aboutus__text">Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service..</p>
                </div>
            </section>

            <section class="aboutus-benefits">
                <div class="container">
                    <ul class="aboutus-benefits__list">
                        <li class="aboutus-benefits__item">
                            <img src="/static/images/aboutus-1.png" alt="icon" class="aboutus-benefits__icon" />
                            <span class="aboutus-benefits__number">60%</span>
                            <p class="aboutus-benefits__text">Clients on the recommendation of friends</p>
                        </li>
                        <li class="aboutus-benefits__item">
                            <img src="/static/images/aboutus-2.png" alt="icon" class="aboutus-benefits__icon" />
                            <span class="aboutus-benefits__number">2400+</span>
                            <p class="aboutus-benefits__text">Apartments renovated</p>
                        </li>
                        <li class="aboutus-benefits__item">
                            <img src="/static/images/aboutus-3.png" alt="icon" class="aboutus-benefits__icon" />
                            <span class="aboutus-benefits__number">670</span>
                            <p class="aboutus-benefits__text">Qualified specialists</p>
                        </li>
                        <li class="aboutus-benefits__item">
                            <img src="/static/images/aboutus-4.png" alt="icon" class="aboutus-benefits__icon" />
                            <span class="aboutus-benefits__number">150000+ m2</span>
                            <p class="aboutus-benefits__text">Finishing work was carried out</p>
                        </li>
                    </ul>

                    <div class="aboutus-benefits__content">
                        <img src="/static/images/aboutus-img.jpg" alt="image" class="aboutus-benefits__content-image" />
                        <div class="aboutus-benefits__content-inner">
                            <p class="aboutus-benefits__content-text aboutus-benefits__content-text--one">Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in. Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut blandit et mi. Odio massa purus vel praesent arcu enim elit felis viverra.</p>
                            <p class="aboutus-benefits__content-text">Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum integer. </p>
                            <p class="aboutus-benefits__content-author">Courtney Alexander</p>
                            <p class="aboutus-benefits__content-ceo">CEO - Createx Construction Bureau </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="aboutus-mission">
                <div class="container">
                    <h3 class="aboutus-mission__title">Our core values</h3>
                    <p class="aboutus-mission__text">Our mission is to set the highest standards for construction sphere.</p>

                    <div class="aboutus-mission__items-first">
                        <div class="aboutus-mission__item">
                            <div class="aboutus-mission__item-icon">
                                <img src="/static/images/mission1.png" alt="icon" class="aboutus-mission__icon-img" />
                            </div>
                            <div class="aboutus-mission__item-title">Quality</div>
                            <div class="aboutus-mission__item-text">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</div>
                        </div>
                        <span class="aboutus-mission__divider-1"></span>
                        <div class="aboutus-mission__item aboutus-mission__item-second">
                            <div class="aboutus-mission__item-icon">
                                <img src="/static/images/mission2.png" alt="icon" class="aboutus-mission__icon-img" />
                            </div>
                            <div class="aboutus-mission__item-title">Safety</div>
                            <div class="aboutus-mission__item-text">Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</div>
                        </div>
                        <span class="aboutus-mission__divider-2"></span>
                        <div class="aboutus-mission__item">
                            <div class="aboutus-mission__item-icon">
                                <img src="/static/images/mission3.png" alt="icon" class="aboutus-mission__icon-img" />
                            </div>
                            <div class="aboutus-mission__item-title">Comfort</div>
                            <div class="aboutus-mission__item-text">Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</div>
                        </div>
                    </div>

                    <div class="aboutus-mission__history">
                        <div class="aboutus-mission__content">
                            <h4 class="aboutus-mission__content-title">Our history</h4>

                            <ul class="aboutus-mission__content-list">
                                <li class="aboutus-mission__content-item">Present</li>
                                <li class="aboutus-mission__content-item">March 2019</li>
                                <li class="aboutus-mission__content-item">November 2018</li>
                                <li class="aboutus-mission__content-item">July 2015</li>
                                <li class="aboutus-mission__content-item">August 2010</li>
                                <li class="aboutus-mission__content-item">February 2007</li>
                                <li class="aboutus-mission__content-item">May 2004</li>
                                <li class="aboutus-mission__content-item">October 2001</li>
                                <li class="aboutus-mission__content-item">June 2000</li>
                            </ul>
                        </div>


                        <div class="aboutus-mission__slider">

                            <div class="aboutus-mission__slider-btns">
                                <button class="aboutus-mission__slider-btn aboutus-mission__slider-prev">
                                    <img src="/static/images/left-arrow.svg" alt="arrow" class="aboutus-mission__slider-arrowprev" />
                                    <img src="/static/images/example.svg.png" alt="arrow" class="aboutus-mission__slider-arrowprev-2" />
                                </button>
                                <button class="aboutus-mission__slider-btn aboutus-mission__slider-next">
                                    <img src="/static/images/right-arrow.svg" alt="arrow" class="aboutus-mission__slider-arrownext" />
                                    <img src="/static/images/right-arrow2.svg" alt="arrow" class="aboutus-mission__slider-arrownext-2" />
                                </button>
                            </div>

                            <div class="swiper4 aboutus-mission__items">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <a href="#" class="aboutus-mission__item-link">
                                            <div class="aboutus-mission__item">
                                                <img src="/static/images/history-1.jpg" alt="image" class="aboutus-mission__image" />

                                                <div class="about-mission__item-content">
                                                    <p class="aboutus-mission__item-text-2">Bcelerisque dapibus pharetra nibh semper iaculis
                                                        duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi.
                                                        Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus. Eu nec vitae,
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="#" class="aboutus-mission__item-link">
                                            <div class="aboutus-mission__item">
                                                <img src="/static/images/history-22.jpg" alt="image" class="aboutus-mission__image" />
                                                <div class="about-mission__item-content">
                                                    <p class="aboutus-mission__item-text-2">Bcelerisque dapibus pharetra nibh semper iaculis
                                                        duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi.
                                                        Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus. Eu nec vitae,
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="swiper-slide">
                                        <a href="#" class="aboutus-mission__item-link">
                                            <div class="aboutus-mission__item">
                                                <img src="/static/images/history-33.jpg" alt="image" class="aboutus-mission__image" />
                                                <div class="about-mission__item-content">
                                                    <p class="aboutus-mission__item-text-2">Bcelerisque dapibus pharetra nibh semper iaculis
                                                        duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi.
                                                        Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus. Eu nec vitae,
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>


                        </div>


                    </div>


                </div>
            </section>

            <section class="aboutus-partners">
                <div class="container">

                    <div class="aboutus-partners__top">
                        <h3 class="aboutus-partners__title">Our partners</h3>
                        <p class="aboutus-partners__text">We are supported by 12+ industry bodies and media partners</p>
                        <div class="aboutus-partners__list">
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-1.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-2.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-3.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-4.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-5.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-6.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                        </div>

                        <div class="aboutus-partners__list">
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-11.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-22.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-33.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-44.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-55.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                            <div class="aboutus-partners__item">
                                <a href="#" class="aboutus-partners__link">
                                    <img src="/static/images/partners-66.png" alt="logo" class="aboutus-partners__logo" />
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

            <section class="aboutus-team">
                <div class="container">
                    <h3 class="aboutus-team__title">Our team</h3>
                        <p class="aboutus-team__text">People are at the heart of Createx Construction Bureau  </p>

                        <div class="aboutus-team__items">
                            <div class="aboutus-team__item">
                                <img src="/static/images/team-1.jpg" alt="photo" class="aboutus-team__photo" />
                                <h5 class="aboutus-team__item-name">Courtney Alexander</h5>
                                <p class="aboutus-team__item-prof">CEO, Co-Founder</p>

                                <div class="aboutus-team__social-wrapper">
                                    <div class="aboutus-team__social">
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/linkedin.png" alt="linkedin" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/twit.png" alt="twit" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/facebook-2.png" alt="facebook" class="aboutus-team__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="aboutus-team__item">
                                <img src="/static/images/team-2.jpg" alt="photo" class="aboutus-team__photo" />
                                <h5 class="aboutus-team__item-name">Calvin Fox</h5>
                                <p class="aboutus-team__item-prof">CTO, Co-Founder</p>

                                <div class="aboutus-team__social-wrapper">
                                    <div class="aboutus-team__social">
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/linkedin.png" alt="linkedin" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/twit.png" alt="twit" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/facebook-2.png" alt="facebook" class="aboutus-team__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="aboutus-team__item">
                                <img src="/static/images/team-3.jpg" alt="photo" class="aboutus-team__photo" />
                                <h5 class="aboutus-team__item-name">Johnny Lane</h5>
                                <p class="aboutus-team__item-prof">Commercial Manager</p>

                                <div class="aboutus-team__social-wrapper">
                                    <div class="aboutus-team__social">
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/linkedin.png" alt="linkedin" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/twit.png" alt="twit" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/facebook-2.png" alt="facebook" class="aboutus-team__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="aboutus-team__item">
                                <img src="/static/images/team-4.jpg" alt="photo" class="aboutus-team__photo" />
                                <h5 class="aboutus-team__item-name">Diane Mccoy</h5>
                                <p class="aboutus-team__item-prof">Director of Human Resources</p>

                                <div class="aboutus-team__social-wrapper">
                                    <div class="aboutus-team__social">
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/linkedin.png" alt="linkedin" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/twit.png" alt="twit" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/facebook-2.png" alt="facebook" class="aboutus-team__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="aboutus-team__items">
                            <div class="aboutus-team__item">
                                <img src="/static/images/team-5.jpg" alt="photo" class="aboutus-team__photo" />
                                <h5 class="aboutus-team__item-name">Judith Warren</h5>
                                <p class="aboutus-team__item-prof">Lead Accountant</p>

                                <div class="aboutus-team__social-wrapper">
                                    <div class="aboutus-team__social">
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/linkedin.png" alt="linkedin" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/twit.png" alt="twit" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/facebook-2.png" alt="facebook" class="aboutus-team__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="aboutus-team__item">
                                <img src="/static/images/team-6.jpg" alt="photo" class="aboutus-team__photo" />
                                <h5 class="aboutus-team__item-name">Floyd Simmmons</h5>
                                <p class="aboutus-team__item-prof">Finacial Director</p>

                                <div class="aboutus-team__social-wrapper">
                                    <div class="aboutus-team__social">
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/linkedin.png" alt="linkedin" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/twit.png" alt="twit" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/facebook-2.png" alt="facebook" class="aboutus-team__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="aboutus-team__item">
                                <img src="/static/images/team-7.jpg" alt="photo" class="aboutus-team__photo" />
                                <h5 class="aboutus-team__item-name">Serenity Edwards</h5>
                                <p class="aboutus-team__item-prof">Director of Marketing</p>

                                <div class="aboutus-team__social-wrapper">
                                    <div class="aboutus-team__social">
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/linkedin.png" alt="linkedin" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/twit.png" alt="twit" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/facebook-2.png" alt="facebook" class="aboutus-team__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="aboutus-team__item">
                                <img src="/static/images/team-8.jpg" alt="photo" class="aboutus-team__photo" />
                                <h5 class="aboutus-team__item-name">Shawn Edwards</h5>
                                <p class="aboutus-team__item-prof">Tech Lead</p>

                                <div class="aboutus-team__social-wrapper">
                                    <div class="aboutus-team__social">
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/linkedin.png" alt="linkedin" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/twit.png" alt="twit" class="aboutus-team__img" />
                                        </a>
                                        <a href="#" class="aboutus-team__link">
                                            <img src="/static/images/facebook-2.png" alt="facebook" class="aboutus-team__img" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="aboutus-team__footer">
                            <p class="aboutus-team__footer-text">Become a part of the best team in the construction market of the USA. </p>
                            <a href="positions.html" class="aboutus-team__footer-link">Available Positions</a>
                        </div>
                </div>
            </section>

            <section class="aboutus-worldwide">
                <div class="container">
                    <h3 class="aboutus-worldwide__title">We work worldwide</h3>
                    <img src="/static/images/map.png" alt="map" class="aboutus-worldwide__image" />
                </div>
            </section>


        </main>

        <SubFooter />
        <Footer />
        </>
    );
}

export default AboutUs;
