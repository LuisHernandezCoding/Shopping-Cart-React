import ContactForm from '../helper/ContactForm';

const Contact = () => (
  <div className="hero has-background-primary is-fullwidth">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-white animate__animated animate__delay-1s animate__zoomIn">
          Get in touch
        </h1>
        <p className="subtitle is-5 has-text-white has-text-centered animate__animated animate__delay-1s animate__bounceIn">
          We want to hear from you. Please fill out the form below and
          we will get back to you as soon as possible.
        </p>
        <div className="columns is-centered">
          <div className="column is-half">
            <ContactForm />
          </div>
          <div className="column is-half">
            <hr className="animate__animated animate__delay-2s animate__fadeInUp" />
            <div className="is-flex is-flex-direction-column is-justify-content-center animate__animated animate__delay-1s animate__fadeInRightBig">
              <h1 className="title is-1 has-text-centered has-text-weight-bold has-text-white">
                Pizza Planet
              </h1>
              <p className="subtitle is-5 has-text-white has-text-centered">
                1234 Pizza Planet Way
              </p>
              <p className="subtitle is-5 has-text-white has-text-centered">
                Pizza Planet, CA 12345
              </p>
              <p className="subtitle is-5 has-text-white has-text-centered">
                (123) 456-7890
              </p>
            </div>
            <hr className="animate__animated animate__delay-2s animate__fadeInUp" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
