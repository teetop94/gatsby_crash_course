import React from 'react'
import Link from "gatsby-link";

const ContactPage = () =>
  (
    <div >
      <Link to="/">Contact Page</Link>
      <br />
      <br />
      <h3>Get in touch</h3>
      <form 
        name="contact" 
        method="post"
        data-netify ="true"
        data-netfify-honeypot="bot-field">
        <p>
            <label>First Name:<input name="fname" placeholder="First name" type="text" /></label>
        </p>
        <p>
            <label>Last Name:<input name="lname" placeholder="last name" type="text" /></label>
        </p>
        <p>
            <label>Email:<input name="email" placeholder="email" type="text" /></label>
        </p>
        <p>
            <label>Phone Number:<input name="phone" placeholder="Phone Number" /></label>
        </p>
        <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
        <button type="submit">Send</button>
        </p>
        
      </form>
    </div>
  )


export default ContactPage;
