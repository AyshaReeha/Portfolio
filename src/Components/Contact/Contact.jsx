import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "aa72d33e-3211-47e8-ab92-b395bf570c6c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert('successfully sent')
        setResult("Form Submitted Successfully");
        console.log("successfully sent",response)
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_o4tlkjc',     // replace with your EmailJS service ID
      'service_o4tlkjc',    // replace with your EmailJS template ID
      form.current,
      '7jdWlgKOtB3OBJdNz'         // replace with your EmailJS user/public key
    ).then(() => {
      alert("Message sent!");
      form.current.reset();
    }, () => {
      alert("Failed to send message.");
    });
  };

  return (
    <div id='contact' className="contact-container">
      <div className="contact-left">
        <h2>Let's talk</h2>
        <p>I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out through the form or connect with me on social media!.</p>
        <p>Emailid: ayshareeha719@gmail.com</p>
        <p><a href="https://github.com/AyshaReeha" target="_blank">Github</a></p>
        <p><a href="http://www.linkedin.com/in/aysha-reeha-ev" target="_blank">Linkedin</a></p>
        <p><a href="https://www.instagram.com/aysha_reeha_/" target="_blank">Instgaram</a></p>
      </div>

      <div className="contact-right">
        <h2>Contact Me</h2>
        <form onSubmit={onSubmit}>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="text" name="title" placeholder="Subject" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>

      </div>
    </div>
  );
};

export default Contact;
