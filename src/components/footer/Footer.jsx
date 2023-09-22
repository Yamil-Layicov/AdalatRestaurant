import { useState } from "react";
import "./footer.scss";
import { GrLocation } from "react-icons/gr";
import { IconContext } from "react-icons/lib";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upFooter">
        <div className="boxFooter">
          <span className="icon"><GrLocation /></span>
          <span>Address</span>
          <p>
            97845 Baker st. 567 <br /> Los Angeles - US
          </p>
        </div>
        <div className="boxFooter">
          <span>
            <GrLocation />
          </span>
          <span>Address</span>
          <p>97845 Baker st. 567 Los Angeles - US</p>
        </div>
        <div className="boxFooter">
          <span>
            <GrLocation />
          </span>
          <span>Address</span>
          <p>97845 Baker st. 567 Los Angeles - US</p>
        </div>
        <div className="boxFooter">
          <h4>Keep in touch</h4>
          <div className="emailSend">
            <input type="text" placeholder="email"/>
            <div className="sendBtn"></div>
          </div>
        </div>
      </div>
      <div className="downFooter"></div>
    </div>
  );
};

export default Footer;
