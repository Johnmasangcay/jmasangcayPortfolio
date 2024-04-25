import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

import styles from "./index.module.css";

const Contact = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_PUBLIC_KEY}`)
            .then(() => {
                alert('Email sent successfully');
                e.target.reset();
            })
            .catch((error: any) => {
                alert('Error sending email');
                console.error('Error sending email:', error);
            });
    };

    return (
        <>
            <div className="container">
                <div className={`row ${styles.rowMargin}`}>
                    <form className="contact__form pb-3" onSubmit={sendEmail}>
                        <label htmlFor="emailFrom">Your Email:</label>
                        <input className={`form-control mb-3 ${styles.inputColor}`} type="email" placeholder="name@example.com" name="email_from" id="emailFrom" required/>
                        <label htmlFor="message">Your Message:</label>
                        <textarea className={`form-control ${styles.inputColor}`} rows={5} name="message" id="message" required></textarea>
                        <Button type="submit" variant="dark" className="mt-3">
                            Send Email
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact