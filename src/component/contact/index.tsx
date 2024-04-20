import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

import styles from "./index.module.css";

const Contact = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_PUBLIC_KEY}`);
    };

    return (
        <>
            <div className="container">
                <div className={`row ${styles.rowMargin}`}>
                    <form className="contact__form" onSubmit={sendEmail}>
                        <label htmlFor="emailFrom">Your Email:</label>
                        <input className={`form-control mb-3 ${styles.inputColor}`} type="email" placeholder="name@example.com" name="email_from" id="emailFrom" />
                        <label htmlFor="message">Your Message:</label>
                        <textarea className={`form-control ${styles.inputColor}`} rows={5} name="message" id="message"></textarea>
                        <Button type="submit" variant="dark" className="mt-3">
                            Send Email
                        </Button>
                    </form>
                    <div className="text-center">
                        <div className="col-md-12">
                            <h6>Phone: (209) 641-7702</h6>
                            <h6>Email: johnneilmasangcay28@yahoo.com</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact