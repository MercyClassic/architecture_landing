import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import SubFooter from '../components/SubFooter';
import useFetching from '../hooks/useFetching';
import ExampleService from '../API/ExampleService';


const Examples = () => {
    const params = useParams();

    const [examplesData, setExamples] = useState({});
    const location = useLocation();
    const [fetchExamples, isLoading, ExampleError] = useFetching(async () => {
        const data = await ExampleService.getExamples();
        setExamples(data);
    });

     useEffect(() => {
        fetchExamples(location.search);
    }, [location.search, location.pathname]);

    return(
        <>
        {isLoading
            ? <Loader />
            : console.log(examplesData)
        }
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
                            <a href="work.html" class="breadcrumbs__link--active ">Work</a>
                        </li>
                    </ul>
                </div>
            </div>

            <section class="work-top">
                <div class="container">
                    <h2 class="work-top__title">OUR WORK</h2>
                    <p class="work-top__text">Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.</p>
                </div>
            </section>

            <section class="work-cards">
                <div class="container">
                    <div class="work-cards__items">
                        <div class="work-cards__item">
                            <a href="#allproject" class="work-cards__item-link">
                                <div class="work-cards__item-content">
                                    <img src="/static/images/work-1.svg" alt="" class="work-cards__icon-img" />
                                    <img src="/static/images/work-11.svg" alt="" class="work-cards__icon-img-2" />

                                    <h4 class="work-cards__item-title">All Projects</h4>
                                </div>
                            </a>
                        </div>
                        <div class="work-cards__item">
                            <a href="#allproject" class="work-cards__item-link">
                                <div class="work-cards__item-content">
                                    <img src="/static/images/work-2.svg" alt="" class="work-cards__icon-img" />
                                    <img src="/static/images/work-22.svg" alt="" class="work-cards__icon-img-2" />

                                    <h4 class="work-cards__item-title">Construction</h4>
                                </div>
                            </a>
                        </div>
                        <div class="work-cards__item">
                            <a href="#allproject" class="work-cards__item-link">
                                <div class="work-cards__item-content">
                                    <img src="/static/images/work-3.svg" alt="" class="work-cards__icon-img" />
                                    <img src="/static/images/work-33.svg" alt="" class="work-cards__icon-img-2" />

                                    <h4 class="work-cards__item-title">Project Development</h4>
                                </div>
                            </a>
                        </div>
                        <div class="work-cards__item">
                            <a href="design.html" class="work-cards__item-link">
                                <div class="work-cards__item-content">
                                    <img src="/static/images/work-4.svg" alt="" class="work-cards__icon-img" />
                                    <img src="/static/images/work-44.svg" alt="" class="work-cards__icon-img-2" />

                                    <h4 class="work-cards__item-title">Interior Design</h4>
                                </div>
                            </a>
                        </div>
                        <div class="work-cards__item">
                            <a href="design.html" class="work-cards__item-link">
                                <div class="work-cards__item-content">
                                    <img src="/static/images/work-5.svg" alt="" class="work-cards__icon-img" />
                                    <img src="/static/images/work-55.svg" alt="" class="work-cards__icon-img-2" />

                                    <h4 class="work-cards__item-title">Repairs</h4>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section class="work-galery" id="allproject">
                <div class="container">

                    <div class="work-galery__items">

                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/work-galery-1.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">Cubes Building</h5>
                                        <p class="work-galery__item-text">Business Centers</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">Cubes Building</h5>
                                        <p class="work-galery__item-text">Business Centers</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/work-galery-2.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">Modern Cottage</h5>
                                        <p class="work-galery__item-text">Private houses</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">Modern Cottage</h5>
                                        <p class="work-galery__item-text">Private houses</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/work-galery-3.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">Luxury Beach House</h5>
                                        <p class="work-galery__item-text">Private houses</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">Luxury Beach House</h5>
                                        <p class="work-galery__item-text">Private houses</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div class="work-galery__items">

                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/work-galery-4.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">Modern Double Bedroom</h5>
                                        <p class="work-galery__item-text">Apartments & flats</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">Modern Double Bedroom</h5>
                                        <p class="work-galery__item-text">Apartments & flats</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/work-galery-5.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">Kids Bedroom With Decorations</h5>
                                        <p class="work-galery__item-text">Apartments & flats</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">Kids Bedroom With Decorations</h5>
                                        <p class="work-galery__item-text">Apartments & flats</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/work-galery-6.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">The Pencil Building</h5>
                                        <p class="work-galery__item-text">Stores & Malls</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">The Pencil Building</h5>
                                        <p class="work-galery__item-text">Stores & Malls</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div class="work-galery__items">

                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/portfolio-1.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">Red Finger Building</h5>
                                        <p class="work-galery__item-text">Business Centers</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">Red Finger Building</h5>
                                        <p class="work-galery__item-text">Business Centers</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/work-galery-8.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">Scandinavian Style Interior</h5>
                                        <p class="work-galery__item-text">Private houses</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">Scandinavian Style Interior</h5>
                                        <p class="work-galery__item-text">Private houses</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="work-galery__item-wrapper">
                            <a href="cottage.html" class="work-galery__item-link">
                                <div class="work-galery__item">
                                    <img src="/static/images/work-galery-9.jpg" alt="image" class="work-galery__image" />
                                    <div class="work-galery__item-content">
                                        <h5 class="work-galery__item-title">Brown and Gray Painted House</h5>
                                        <p class="work-galery__item-text">Private houses</p>
                                    </div>

                                    <div class="work-galery__item-hover">
                                        <h5 class="work-galery__item-title">Brown and Gray Painted House</h5>
                                        <p class="work-galery__item-text">Private houses</p>
                                        <button href="#" class="work-galery__item-btn">View Project</button>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    <div class="work-galery__footer">
                        <a href="cottage.html" class="work-galery__footer-link">
                            <img src="/static/images/load.png" alt="icon" class="work-galery__footer-img" />
                        </a>
                        <a href="cottage.html" class="work-galery__footer-link">
                            <h6 class="work-galery__footer-title">Load more</h6>
                        </a>
                    </div>

                </div>
            </section>

            <section class="work-partners">
                <div class="container">
                    <div class="work-partners__inner">


                        <div class="work-partners__wrapper">
                            <div class="work-partners__content">

                                <div class="work-partners__content-title">What our clients are saying</div>

                                <div class="swiper-2 work-partners__content-items">
                                    <div class="work-partners__content-item">
                                        <div class="work-partners__content-avatar">
                                            <img src="/static/images/avatar.jpg" alt="avatar" class="work-partners__content-img" />
                                        </div>
                                        <div class="work-partners__content-text">Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim.
                                            Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.
                                        </div>
                                        <p class="work-partners__content-author">Shawn Edwards</p>
                                        <p class="work-partners__content-position">Position, Company name</p>
                                    </div>
                                    <div class="work-partners__content-item">
                                        <div class="work-partners__content-avatar">
                                            <img src="/static/images/avatar.jpg" alt="avatar" class="work-partners__content-img" />
                                        </div>
                                        <div class="work-partners__content-text">Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim.
                                            Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.
                                        </div>
                                        <p class="work-partners__content-author">Shawn Edwards</p>
                                        <p class="work-partners__content-position">Position, Company name</p>
                                    </div>
                                    <div class="work-partners__content-item">
                                        <div class="work-partners__content-avatar">
                                            <img src="/static/images/avatar.jpg" alt="avatar" class="work-partners__content-img" />
                                        </div>
                                        <div class="work-partners__content-text">Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim.
                                            Consectetur magna cillum consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.
                                        </div>
                                        <p class="work-partners__content-author">Shawn Edwards</p>
                                        <p class="work-partners__content-position">Position, Company name</p>
                                    </div>
                                </div>

                                <div class="work-partners__slider-btns">
                                    <button class="work-partners__slider-btn work-partners__slider-prev">
                                        <img src="/static/images/left-arrow.svg" alt="arrow" class="work-partners__slider-arrowprev" />
                                    </button>
                                    <button class="work-partners__slider-btn work-partners__slider-next">
                                        <img src="/static/images/right-arrow.svg" alt="arrow" class="work-partners__slider-arrowprev" />
                                    </button>
                                </div>
                            </div>

                            <div class="work-partners__image">
                                <img src="/static/images/partners-img.jpg" alt="image" class="work-partners-img" />
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            <section class="work-clients">
                <div class="container">
                    <div class="work-clients__footer">
                        <h3 class="work-clients__title">Our clients</h3>
                        <div class="work-clients__list">
                            <div class="work-partners__item">
                                <a href="#" class="work-partners__link">
                                    <img src="/static/images/partners-2.png" alt="logo" class="work-partners__logo" />
                                </a>
                            </div>
                            <div class="work-partners__item">
                                <a href="#" class="work-partners__link">
                                    <img src="/static/images/partners-3.png" alt="logo" class="work-partners__logo" />
                                </a>
                            </div>
                            <div class="work-partners__item">
                                <a href="#" class="work-partners__link">
                                    <img src="/static/images/partners-4.png" alt="logo" class="work-partners__logo" />
                                </a>
                            </div>
                            <div class="work-partners__item">
                                <a href="#" class="work-partners__link">
                                    <img src="/static/images/partners-5.png" alt="logo" class="work-partners__logo" />
                                </a>
                            </div>
                            <div class="work-partners__item">
                                <a href="#" class="work-partners__link">
                                    <img src="/static/images/partners-6.png" alt="logo" class="work-partners__logo" />
                                </a>
                            </div>
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

export default Examples;
