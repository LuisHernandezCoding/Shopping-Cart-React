import Food from '../images/food.jpg';

const About = () => (
  <div>
    <div className="container">
      <hr className="animate__animated animate__fadeIn animate__delay-1s" />
      <h1 className="title is-1 has-text-white has-text-weight-bold animate__animated animate__slideInLeft animate__delay-1s">
        About us
      </h1>
      <p className="description animate__animated animate__zoomIn animate__delay-2s">
        <p className="subtitle is-4 has-text-white">
          We are a family owned business that has been in the business for over 30 years.
        </p>
      </p>
      <hr className="animate__animated animate__fadeIn animate__delay-2s" />
      <div className="columns">
        <div className="column is-6">
          <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <h1 className="subtitle is-1 has-text-white has-text-weight-bold animate__animated animate__fadeInLeft animate__delay-2s">
              Our Story
            </h1>
            <p className="subtitle is-4 has-text-white animate__animated animate__fadeInDown animate__delay-2s">
              Since the beginning, we have been committed to providing our customers with
              the best quality products and services.
            </p>
            <p className="subtitle is-4 has-text-white animate__animated animate__fadeInLeft animate__delay-2s">
              Starting from a small family owned business, we have grown to become one of
              the largest food distributors in the country with over 30 years of experience.
            </p>
            <p className="subtitle is-4 has-text-white animate__animated animate__fadeInUp animate__delay-2s">
              We are proud to be a family owned business and we are committed to providing
              our customers with the best quality products and services as we have been
              doing with all the love and care that we have for our customers.
            </p>
          </div>
        </div>
        <div className="column is-6 animate__animated animate__fadeInRight animate__delay-2s">
          <img src={Food} alt="Food" />
        </div>
      </div>
      <hr className="animate__animated animate__fadeIn animate__delay-2s" />
    </div>
  </div>
);

export default About;
