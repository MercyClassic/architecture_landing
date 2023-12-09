import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const HomePage = () => {
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
                            <a href="services.html" class="breadcrumbs__link--active ">Services</a>
                        </li>
                    </ul>
                </div>
            </div>

            <section class="services-top">
                <div class="container">
                    <h2 class="services-top__title">SERVICES</h2>
                    <p class="services-top__text">If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs.</p>
                </div>
            </section>

            <section class="services-inner">
                <div class="container">
                    <div class="services-inner__items">

                        <div class="services-inner__item">
                            <img src="/static/images/ser-inn-1.jpg" alt="image" class="services-inner__img" />
                            <div class="services-inner__item-content">
                                <h4 class="services-inner__item-title">Construction</h4>
                                <p class="services-inner__item-text">Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. </p>
                                <a href="design.html" class="services-inner__item-btn">Learn more</a>
                            </div>
                        </div>
                        <div class="services-inner__item">
                            <div class="services-inner__item-content">
                                <h4 class="services-inner__item-title">Project Development</h4>
                                <p class="services-inner__item-text">Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget.</p>
                                <a href="design.html" class="services-inner__item-btn">Learn more</a>
                            </div>
                            <img src="/static/images/ser-inn-2.jpg" alt="image" class="services-inner__img services-inner__img-second" />
                        </div>
                        <div class="services-inner__item">
                            <img src="/static/images/ser-inn-3.jpg" alt="image" class="services-inner__img" />
                            <div class="services-inner__item-content">
                                <h4 class="services-inner__item-title">Interior Design</h4>
                                <p class="services-inner__item-text">Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.</p>
                                <a href="design.html" class="services-inner__item-btn">Learn more</a>
                            </div>
                        </div>
                        <div class="services-inner__item">
                            <div class="services-inner__item-content">
                                <h4 class="services-inner__item-title">Repairs</h4>
                                <p class="services-inner__item-text">Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna. </p>
                                <a href="design.html" class="services-inner__item-btn">Learn more</a>
                            </div>
                            <img src="/static/images/ser-inn-4.jpg" alt="image" class="services-inner__img services-inner__img-second" />
                        </div>

                    </div>
                </div>
            </section>


        </main>

        <section class="subfooter">
            <div class="container">
                <div class="subfooter__inner">
                    <form action="#" class="subfooter__form">
                        <h3 class="subfooter__form-title">A quick way to discuss details</h3>

                        <div class="subfooter__form-name">Name*</div>
                        <input type="text" class="subfooter__name" placeholder="Your name" />

                        <div class="subfooter__form-phone">Phone*</div>
                        <input type="tel" class="subfooter__phone" placeholder="Your phone number" />

                        <div class="subfooter__form-email">Email</div>
                        <input type="text" class="subfooter__email" placeholder="Your working email" />

                        <div class="subfooter__form-message">Message*</div>
                        <textarea type="text" class="subfooter__message" placeholder="Your message"></textarea>

                        <label class="subfooter__checkbox">
                            <input type="checkbox" class="subfooter__check" />
                            <span class="subfooter__form-check">I agree to receive communications from Createx Construction Bureau.</span>
                        </label>

                        <button class="subfooter__btn">send request</button>

                    </form>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
}

export default HomePage;
