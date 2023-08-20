import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./contact.css";

const contact = () => {
  return (
    <section id="contact" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            we always ready to help by providing the best residence for you.
            <div className="flexColStart contactModes">
              {/* first row   */}
              <div className="flexStart row">
                {/* first mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Call</span>
                      <span className="secondaryText">085 155 288 534</span>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    href="https://wa.me/6285155288534"
                    className="flexCenter button"
                  >
                    Call Now
                  </a>
                </div>
                {/* second mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Chat</span>
                      <span className="secondaryText">085 155 288 534</span>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    href="https://wa.me/6285155288534"
                    className="flexCenter button"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
              {/* second row */}
              <div className="flexStart row">
                {/* first mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Video Call</span>
                      <span className="secondaryText">085 155 288 534</span>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    href="https://wa.me/6285155288534"
                    className="flexCenter button"
                  >
                    Video Call Now
                  </a>
                </div>
                {/* second mode */}
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <HiChatBubbleBottomCenter size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Message</span>
                      <span className="secondaryText">085 155 288 534</span>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    href="https://wa.me/6285155288534"
                    className="flexCenter button"
                  >
                    Message Now
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
