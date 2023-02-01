import { useState } from 'react';

import SimpleInput from '../helper/SimpleInput';

function saveToLocalStorage(inputName, value) {
  const contactForm = JSON.parse(localStorage.getItem('contactForm'));
  localStorage.setItem('contactForm', JSON.stringify({ ...contactForm, [inputName]: value }));
}

function loadFromLocalStorage() {
  const contactForm = JSON.parse(localStorage.getItem('contactForm'));
  if (contactForm) {
    return contactForm;
  }
  return {};
}

const Contact = () => {
  const [name, setName] = useState(loadFromLocalStorage().name || 'Your Name');
  const [lastName, setLastName] = useState(loadFromLocalStorage().lastName || 'Your Last Name');
  const [email, setEmail] = useState(loadFromLocalStorage().email || 'Your Email');
  const [subject, setSubject] = useState(loadFromLocalStorage().subject || 'Subject');
  const [message, setMessage] = useState(loadFromLocalStorage().message || 'Message');

  return (
    <div className="hero has-background-info is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-warning animate__animated animate__delay-1s animate__zoomIn">
            Get in touch
          </h1>
          <p className="subtitle is-5 has-text-white has-text-centered animate__animated animate__delay-1s animate__bounceIn">
            We want to hear from you. Please fill out the form below and
            we will get back to you as soon as possible.
          </p>
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box has-background-info-dark animate__animated animate__delay-1s animate__fadeInLeftBig">
                <h3 className="title is-3 has-text-centered has-text-weight-bold has-text-white">
                  Contact Form
                </h3>
                <div className="field">
                  <SimpleInput
                    size="is-medium"
                    defaultValue="Your Name"
                    icon="user"
                    callback={(value) => {
                      setName(value);
                      saveToLocalStorage('name', value);
                    }}
                    actualValue={name}
                    type="text"
                  />
                </div>
                <div className="field">
                  <SimpleInput
                    size="is-medium"
                    defaultValue="Your Last Name"
                    icon="user"
                    callback={(value) => {
                      setLastName(value);
                      saveToLocalStorage('lastName', value);
                    }}
                    actualValue={lastName}
                    type="text"
                  />
                </div>
                <div className="field">
                  <SimpleInput
                    size="is-medium"
                    defaultValue="Your Email"
                    icon="envelope"
                    callback={(value) => {
                      setEmail(value);
                      saveToLocalStorage('email', value);
                    }}
                    actualValue={email}
                    type="email"
                  />
                </div>
                <div className="field">
                  <SimpleInput
                    size="is-medium"
                    defaultValue="Subject"
                    icon="comment"
                    callback={(value) => {
                      setSubject(value);
                      saveToLocalStorage('subject', value);
                    }}
                    actualValue={subject}
                    type="text"
                  />
                </div>
                <div className="field">
                  <SimpleInput
                    size="is-medium"
                    defaultValue="Message"
                    icon="comment"
                    callback={(value) => {
                      setMessage(value);
                      saveToLocalStorage('message', value);
                    }}
                    actualValue={message}
                    type="textarea"
                  />
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-success is-fullwidth is-medium" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="is-flex is-flex-direction-column is-justify-content-center animate__animated animate__delay-1s animate__fadeInRightBig">
                <h1 className="title is-1 has-text-centered has-text-weight-bold has-text-warning">
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
              <div className="image is-4by1 animate__animated animate__delay-2s animate__fadeInRight">
                <img src="https://via.placeholder.com/400x140" alt="map" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
