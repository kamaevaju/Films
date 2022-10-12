import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mqkjldvq");
  if (state.succeeded) {
      return <p className='container box'>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='feedbackForm'>

      <label htmlFor="email">
        Email 
      </label>

      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your email'
      />

      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
<br></br>
      <label>
        Your message
      </label>

      <textarea
        id="message"
        name="message"
        placeholder='Your message'
      />

      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn' type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function Contacts() {
  return (
    <ContactForm />
  );
}


export default Contacts;