import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import SubFooter from '../components/SubFooter';
import useFetching from '../hooks/useFetching';
import ExampleService from '../API/ExampleService';


const ExampleDetail = () => {
    const params = useParams();

    const [exampleData, setExample] = useState({});
    const [fetchExample, isLoading, ExampleError] = useFetching(async () => {
        const data = await ExampleService.getExampleDetail(params.id);
        setExample(data);
    });

     useEffect(() => {
        fetchExample(params.id);
    }, []);

    return(
        <>
        {isLoading
            ? <Loader />
            : console.log(exampleData)
        }
        <Header />
        <main class="main">

            <div class="breadcrumbs">
                <div class="container">
                    <ul class="breadcrumbs__list">
                        <li class="breadcrumbs__item">
                            <a href="index.html" class="breadcrumbs__link">Homepage</a>
                        </li>
                        <span class="breadcrumbs__link">/</span>
                        <li class="breadcrumbs__item">
                            <a href="work.html" class="breadcrumbs__link">Work</a>
                        </li>
                        <span class="breadcrumbs__link--active">/</span>
                        <li class="breadcrumbs__item">
                            <a href="cottage.html" class="breadcrumbs__link--active ">Modern Cottage</a>
                        </li>
                    </ul>
                </div>
            </div>

            <section class="cottage-top">
                <div class="container">
                    <h3 class="cottage-top__title">Modern Cottage</h3>


                    <div class="cottage-top__arrows">
                        <div class="cottage-top__arrow-left cottage-top__arrow">
                            <img src="/static/images/cottage-left.svg" alt="arrow" class="cottage-top__left-img" />
                            <img src="/static/images/cottage-left-2.svg" alt="arrow" class="cottage-top__left-img-2" />
                        </div>
                        <div class="cottage-top__arrow-right cottage-top__arrow">
                            <img src="/static/images/cottage-right.svg" alt="arrow" class="cottage-top__right-img" />
                            <img src="/static/images/cottage-right-2.svg" alt="arrow" class="cottage-top__right-img-2" />
                        </div>
                    </div>


                    <div class="cottage-top__slider-wrapper">
                        <div class="cottage-top__slider-item">
                            <img src="/static/images/cottage-img.jpg" alt="image" class="cottage-top__slider-img" />
                        </div>
                    </div>

                    <div class="cottage-top__slider-carousel">
                        <div class="cottage-top__carousel-item">
                            <img src="/static/images/carousel-1.jpg" alt="image" class="cottage-top__carousel-img" />
                        </div>
                        <div class="cottage-top__carousel-item">
                            <img src="/static/images/carousel-2.jpg" alt="image" class="cottage-top__carousel-img" />
                        </div>
                        <div class="cottage-top__carousel-item">
                            <img src="/static/images/carousel-3.jpg" alt="image" class="cottage-top__carousel-img" />
                        </div>
                        <div class="cottage-top__carousel-item">
                            <img src="/static/images/carousel-4.jpg" alt="image" class="cottage-top__carousel-img" />
                        </div>
                        <div class="cottage-top__carousel-item">
                            <img src="/static/images/carousel-5.jpg" alt="image" class="cottage-top__carousel-img" />
                        </div>
                        <div class="cottage-top__carousel-item">
                            <img src="/static/images/carousel-6.jpg" alt="image" class="cottage-top__carousel-img" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="cottage-goal">
                <div class="container">
                    <div class="cottage-goal__wrapper">
                        <div class="cottage-goal__content">
                            <h4 class="cottage-goal__content-title">Project goal</h4>
                            <p class="cottage-goal__content-text">Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.</p>
                            <p class="cottage-goal__content-text">Modern design and care for each family member to feel as comfortable as possible in the new home.</p>
                        </div>

                        <div class="cottage-goal__info">
                            <div class="cottage-goal__info-titles">
                                <h5 class="cottage-goal__info-title">LOCATION</h5>
                                <h5 class="cottage-goal__info-title">CLIENT</h5>
                                <h5 class="cottage-goal__info-title">ARCHITECT</h5>
                                <h5 class="cottage-goal__info-title">SIZE</h5>
                                <h5 class="cottage-goal__info-title">VALUE</h5>
                                <h5 class="cottage-goal__info-title">COMPLETED</h5>
                            </div>
                            <div class="cottage-goal__info-texts">
                                <p class="cottage-goal__info-text">2464 Royal Ln. Mesa, New Jersey</p>
                                <p class="cottage-goal__info-text">Darlene Robertson</p>
                                <p class="cottage-goal__info-text">HIK Architecture</p>
                                <p class="cottage-goal__info-text">840 sq. feet</p>
                                <p class="cottage-goal__info-text">$2 million</p>
                                <p class="cottage-goal__info-text">May 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cottage-decisions">
                <div class="container">
                    <div class="cottage-decisions__wrapper">
                        <div class="cottage-decisions__image">
                            <img src="/static/images/cottage-image.jpg" alt="image" class="cottage-decisions__img" />
                        </div>

                        <div class="cottage-decisions__content">
                            <h3 class="cottage-decisions__content-title">Constructive decisions</h3>
                            <p class="cottage-decisions__content-text">Vitae ultrices ornare eu sed in est quisque duis id.</p>
                            <p class="cottage-decisions__content-text">A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
                            <p class="cottage-decisions__content-text">Mauris odio pellentesque commodo, diam.</p>
                            <p class="cottage-decisions__content-text">Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.</p>
                            <p class="cottage-decisions__content-text">At pharetra libero blandit risus, fringilla sed commodo diam.</p>
                            <p class="cottage-decisions__content-text">Integer ultricies viverra ut enim viverra ut.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="cottage-projects">
                <div class="container">
                    <h3 class="cottage-projects__title">Similar projects</h3>

                    <div class="cottage-projects__slider">

                        <div class="cottage-projects__slider-btns">
                            <button class="cottage-projects__slider-btn cottage-projects__slider-prev">
                                <img src="/static/images/left-arrow.svg" alt="arrow" class="cottage-projects__slider-arrowprev" />
                                <img src="/static/images/example.svg.png" alt="arrow" class="cottage-projects__slider-arrowprev-2" />
                            </button>
                            <button class="cottage-projects__slider-btn cottage-projects__slider-next">
                                <img src="/static/images/right-arrow.svg" alt="arrow" class="cottage-projects__slider-arrownext" />
                                <img src="/static/images/right-arrow2.svg" alt="arrow" class="cottage-projects__slider-arrownext-2" />
                            </button>
                        </div>

                        <div class="swiper3 cottage-projects__items">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <a href="work.html" class="cottage-projects__item-link">
                                        <div class="cottage-projects__item">
                                            <img src="/static/images/cottage-projects-1.jpg" alt="image" class="cottage-projects__image" />

                                            <div class="porfolio__item-content">
                                                <h5 class="cottage-projects__item-title">Luxury Beach House</h5>
                                                <p class="cottage-projects__item-text">Private Houses</p>
                                            </div>

                                            <div class="cottage-projects__item-hover">
                                                <h5 class="cottage-projects__item-title">Luxury Beach House</h5>
                                                <p class="cottage-projects__item-text">Private Houses</p>
                                                <button href="#" class="cottage-projects__item-btn">View Project</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="work.html" class="cottage-projects__item-link">
                                        <div class="cottage-projects__item">
                                            <img src="/static/images/cottage-projects-2.jpg" alt="image" class="cottage-projects__image" />
                                            <div class="porfolio__item-content">
                                                <h5 class="cottage-projects__item-title">Brown and Gray Painted House</h5>
                                                <p class="cottage-projects__item-text">Private Houses</p>
                                            </div>

                                            <div class="cottage-projects__item-hover">
                                                <h5 class="cottage-projects__item-title">Brown and Gray Painted House</h5>
                                                <p class="cottage-projects__item-text">Private Houses</p>
                                                <button href="#" class="cottage-projects__item-btn">View Project</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="work.html" class="cottage-projects__item-link">
                                        <div class="cottage-projects__item">
                                            <img src="/static/images/cottage-projects-3.jpg" alt="image" class="cottage-projects__image" />
                                            <div class="porfolio__item-content">
                                                <h5 class="cottage-projects__item-title">Scandinavian Style Interior</h5>
                                                <p class="cottage-projects__item-text">Private Houses</p>
                                            </div>

                                            <div class="cottage-projects__item-hover">
                                                <h5 class="cottage-projects__item-title">Scandinavian Style Interior</h5>
                                                <p class="cottage-projects__item-text">Private Houses</p>
                                                <button href="#" class="cottage-projects__item-btn">View Project</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div class="cottage-projects__footer">
                        <h3 class="cottage-projects__footer-title">Explore all our works</h3>
                        <button class="cottage-projects__footer-btn">View porftfolio</button>
                    </div>
                </div>
            </section>


        </main>

        <SubFooter />

        <Footer />
        </>
    );
}

export default ExampleDetail;
