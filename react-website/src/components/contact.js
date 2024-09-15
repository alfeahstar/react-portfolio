import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2>CONTACT ME</h2>
            <form id="contact-form">
                <div className="mb-1">
                    <label htmlFor="exampleName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleName" required />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleEmail" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleMessage" className="form-label">Message</label>
                    <textarea rows="5" className="form-control" id="exampleMessage" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
