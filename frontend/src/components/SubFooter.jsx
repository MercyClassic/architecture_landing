


const SubFooter = () => {
    return(
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
    );
}

export default SubFooter;
