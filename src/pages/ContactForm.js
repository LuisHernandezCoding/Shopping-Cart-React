import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);
  if (state.succeeded) {
    return (
      <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
        <hr className="animate__animated animate__delay-2s animate__fadeInUp" />
        <h1 className="title is-1 is-spaced has-text-centered has-text-weight-bold has-text-warning animate__animated animate__delay-1s animate__zoomIn">
          Thanks for joining!
        </h1>
        <br />
        <p className="subtitle is-3 has-text-white has-text-centered animate__animated animate__delay-2s animate__bounceIn">
          We will be in touch shortly.
        </p>
        <hr className="animate__animated animate__delay-2s animate__fadeInUp" />
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="box has-background-grey-dark animate__animated animate__delay-1s animate__fadeInUp">
      <div className="field">
        <label className="label has-text-white" htmlFor="email">
          Email Address
          <div className="control">
            <input id="email" type="email" name="email" className="input" placeholder="Your email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </label>
      </div>
      <div className="field">
        <label className="label has-text-white" htmlFor="message">
          Message
          <div className="control">
            <textarea id="message" name="message" className="textarea" placeholder="Your message" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
        </label>
      </div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
