import Header from '../components/Header';
import Footer from '../components/Footer';
import SubFooter from '../components/SubFooter';


const ContactsPage = () => {
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
                            <a href="contacts.html" class="breadcrumbs__link--active ">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>

            <section class="contacts">
                <div class="container">
                    <h2 class="contacts__title">CONTACTS</h2>
                    <p class="contacts__text">Contact us for all your construction needs. We always welcome any questions and comments.</p>
                </div>
            </section>

            <section class="contact-us">
                <div class="container">
                    <h3 class="contact-us__title">Contact us</h3>
                    <p class="contact-us__text">Please complete the form. Detailed information will help us to make a tuned offer.</p>

                    <div class="contact-us__wrapper">
                        <img src="/static/images/contactus.jpg" alt="image" class="contact-us__image" />

                        <form action="text" class="contact-us__form">
                            <div class="contact-us__items">
                                <div class="contact-us__item">
                                    <div class="contact-us__form-name">Name*</div>
                                    <input type="text" class="contact-us__name" placeholder="Your name" />

                                    <div class="contact-us__form-phone">Phone*</div>
                                    <input type="tel" class="contact-us__phone" placeholder="Your phone number" />

                                    <div class="contact-us__form-email">Email</div>
                                    <input type="text" class="contact-us__email" placeholder="Your working email" />
                                </div>
                                <div class="contact-us__item">
                                    <div class="contact-us__form-interest">I am interested in</div>
                                    <select class="contact-us__interest">Interior Design
                                        <option value="s1" class="contact-us__name">Interior Design</option>
                                        <option value="s2">Interior Design-1</option>
                                        <option value="s3">Interior Design-2</option>
                                        <option value="s4">Interior Design-3</option>
                                       </select>

                                    <div class="contact-us__form-location">Location*</div>
                                    <select class="contact-us__location">New York
                                        <option value="s1" class="contact-us__name">New York</option>
                                        <option value="s2">New York-1</option>
                                        <option value="s3">New York-2</option>
                                        <option value="s4">New York-3</option>
                                    </select>

                                    <div class="contact-us__checkboxes-title">Preferred contact method</div>
                                    <div class="contact-us__checkboxes">
                                        <label class="contact-us__radio">
                                            <input type="checkbox" class="contact-us__rad" />
                                            <span class="contact-us__form-rad">Phone</span>
                                        </label>

                                        <label class="contact-us__radio">
                                            <input type="checkbox" class="contact-us__rad" />
                                            <span class="contact-us__form-rad">Email</span>
                                        </label>

                                        <label class="contact-us__radio">
                                            <input type="checkbox" class="contact-us__rad" />
                                            <span class="contact-us__form-rad">Viber</span>
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div class="contact-us__form-message">Message*</div>
                        <textarea type="text" class="contact-us__message" placeholder="Your message"></textarea>

                        <div class="contact-us__footer">
                            <label class="contact-us__checkbox">
                                <input type="checkbox" class="contact-us__check" />
                                <span class="contact-us__form-check">I agree to receive communications from Createx Construction Bureau.</span>
                            </label>

                            <button class="contact-us__btn">send request</button>
                        </div>
                        </form>
                    </div>
                </div>
            </section>

            <section class="contacts-offices">
                <div class="container">
                    <h3 class="contacts-offices__title">Our offices</h3>
                    <p class="contacts-offices__text">Give us a call, send us a note or visit our office. We can’t wait to hear from you!</p>

                    <div class="contacts-offices__items">
                        <div class="contacts-offices__item">
                            <h5 class="contacts-offices__item-title">New York, USA</h5>
                            <p class="contacts-offices__item-address">8502 Preston Rd. Inglewood, New York 98380</p>
                            <a href="#" class="contacts-offices__item-link">See on the map</a>
                            <a href="tel" class="contacts-offices__item-info"><span>Call:</span>(405) 555-0128</a>
                            <a href="email" class="contacts-offices__item-info"><span>Email:</span>hello@createx.com</a>
                            <p class="contacts-offices__item-info"><span>Schedule:</span>Mon - Fri 9:00 - 18:00</p>
                        </div>
                        <span>
                            <img src="/static/images/divider2.png" alt="image" class="contacts-offices__image" />
                        </span>
                        <div class="contacts-offices__item">
                            <h5 class="contacts-offices__item-title">New Jersey, USA</h5>
                            <p class="contacts-offices__item-address">2464 Royal Ln. Mesa, New Jersey 45463</p>
                            <a href="#" class="contacts-offices__item-link">See on the map</a>
                            <a href="tel" class="contacts-offices__item-info"><span>Call:</span>(808) 555-0111</a>
                            <a href="email" class="contacts-offices__item-info"><span>Email:</span>hello@createx.com</a>
                            <p class="contacts-offices__item-info"><span>Schedule:</span>Mon - Fri 9:00 - 18:00</p>
                        </div>
                        <span>
                            <img src="/static/images/divider2.png" alt="image" class="contacts-offices__image" />
                        </span>
                        <div class="contacts-offices__item">
                            <h5 class="contacts-offices__item-title">San Francisco, USA</h5>
                            <p class="contacts-offices__item-address">8502 Preston Rd. Inglewood, San Francisco 98380</p>
                            <a href="#" class="contacts-offices__item-link">See on the map</a>
                            <a href="tel" class="contacts-offices__item-info"><span>Call:</span>(505) 555-0125</a>
                            <a href="email" class="contacts-offices__item-info"><span>Email:</span>hello@createx.com</a>
                            <p class="contacts-offices__item-info"><span>Schedule:</span>Mon - Fri 10:00 - 19:00</p>
                        </div>

                    </div>

                    <div class="contacts-offices__find">
                        <h4 class="contacts-offices__find-title">Find us at</h4>

                        <div class="contacts-offices__social">
                            <a href="#" class="contacts-offices__link">
                                <img src="/static/images/soc-1.svg" alt="icon" class="contacts-offices__icon" />
                                <img src="/static/images/soc-11.svg" alt="icon" class="contacts-offices__icon-2" />
                            </a>
                            <a href="#" class="contacts-offices__link">
                                <img src="/static/images/soc-2.svg" alt="icon" class="contacts-offices__icon" />
                                <img src="/static/images/soc-22.svg" alt="icon" class="contacts-offices__icon-2" />
                            </a>
                            <a href="#" class="contacts-offices__link">
                                <img src="/static/images/soc-3.svg" alt="icon" class="contacts-offices__icon" />
                                <img src="/static/images/soc-33.svg" alt="icon" class="contacts-offices__icon-2" />
                            </a>
                            <a href="#" class="contacts-offices__link">
                                <img src="/static/images/soc-4.svg" alt="icon" class="contacts-offices__icon" />
                                <img src="/static/images/soc-44.svg" alt="icon" class="contacts-offices__icon-2" />
                            </a>
                            <a href="#" class="contacts-offices__link">
                                <img src="/static/images/soc-5.svg" alt="icon" class="contacts-offices__icon" />
                                <img src="/static/images/soc-55.svg" alt="icon" class="contacts-offices__icon-2" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>


        </main>

        <SubFooter />
        <Footer />
        </>
    );
}

export default ContactsPage;
