import "./footer.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import fbc from "../../assets/socials/facebook_icon.svg";
import ins from "../../assets/socials/instagram_icon.svg";
import twt from "../../assets/socials/twitter_icon.svg";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const Footer = () => {
  return (
    <div className="footer">
      <div className="upFooter">
        <div className="boxFooter">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <span className="icon">
              <LocationOnOutlinedIcon fontSize="medium" />
            </span>
            <span className="title">Address</span>
          </div>
          <p>
            97845 Baker st. 567 <br /> Los Angeles - US
          </p>
        </div>
        <div className="boxFooter">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <span className="icon">
              <WifiCalling3OutlinedIcon fontSize="medium" />
            </span>
            <span className="title">Reservations</span>
          </div>
          <p>
            +94 423-23-221 <br />
            reservations@Foores.com
          </p>
        </div>
        <div className="boxFooter">
          <span className="icon">
            <AccessTimeOutlinedIcon fontSize="medium" />
          </span>
          <span className="title">İş saatları</span>
          <p>
            Mon - Sat: 10am - 11pm
            <br /> Sunday: Closed
          </p>
        </div>

        <div className="boxFooter">
          <h5>Əlaqə saxlayın</h5>
          <div className="emailSend">
            <input type="text" placeholder="E-poçt" />
            <div className="sendBtn"><ChevronRightOutlinedIcon fontSize="medium"/></div>
          </div>
        </div>
      </div>
      <hr />
      <div className="downFooter">
        <div className="left">
          © NANA Restaurant - Bütün hüquqlar qorunur.
        </div>
        <div className="socials">
          <img src={fbc} alt="" />
          <img src={ins} alt="" />
          <img src={twt} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
