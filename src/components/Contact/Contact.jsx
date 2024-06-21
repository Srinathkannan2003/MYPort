import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Debug logs to check the form data
        console.log("Form Data: ", formData);

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
            console.log("Validation Failed: Missing Fields");
            return; // Prevent email sending if any field is missing
        } else {
            console.log("Validation Passed: All Fields Filled");
            emailjs.sendForm(
                "service_hb76b6u",
                "template_b6ule19",
                form.current,
                "u-x8M7xDy7N3tIaDj"
            ).then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    setFormData({});
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    setNotDone(true);
                }
            );
        }
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
                        <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                        <span className='not-done'>{notDone && "Please, fill out all fields before sending your message."}</span>
                        <Button type="submit" className="button" disabled={done}>Send</Button>
                        <span className='done'>{done && "Thanks for contacting me. I have received your mail. If you are testing this functionality, it's working perfectly. For serious queries, I will reply. You can also contact me on LinkedIn."}</span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
