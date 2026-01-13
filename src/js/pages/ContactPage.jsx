import React from "react";

import "./contactPage.scss"
// import {useTranslation} from 'react-i18next';

import linkedInLogo from './../../img/link-linkedin.png';
import xingLogo from './../../img/xing.svg';


export default function ContactPage() {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Currently the contact form is broken and I am working on fixing it. In the meantime please email me at oliver.f.watkins@gmail.com")
    }

    return (
        <section className="fa-page contact-page">
            <div className="contact-info paragraph-1">
                <p>
                If you would like to contact me please fill out the form on the right.
                You can also contact me via <a href={"https://www.linkedin.com/in/oliver-watkins-0673b27/"}>Linked In </a>
                    or <a href={"https://www.xing.com/profile/Oliver_Watkins2/cv"}> Xing</a>
                </p>


                {/*todo*/}
                {/*<Trans i18nKey="contact"/>*/}
                <div className="contact-page-image">  </div>

            </div>
            <div className="contact-form-container">
                <form
                    // action="https://api.web3forms.com/submit"
                    onSubmit={handleSubmit}
                >
                    {/*16efebb6-ce76-4ef8-94c8-6b97563e5d3f*/}
                    <input type="hidden" name="access_key" value="16efebb6-ce76-4ef8-94c8-6b97563e5d3f" />

                    <label htmlFor="name">First Name</label>

                    <input type="text" name="name" required placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}/>
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <input type="submit" value="Submit" />

                    <div className={"contact-page-links"}>
                        <a href={"https://www.linkedin.com/in/oliver-watkins-0673b27/"}><img src={xingLogo} alt="Linked in"/></a>
                        <a href={"https://www.xing.com/profile/Oliver_Watkins2/cv"}><img src={linkedInLogo} alt="Xing"/></a>
                    </div>
                </form>
            </div>
        </section>
    );
}