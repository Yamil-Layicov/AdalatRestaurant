import "./footer.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";


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
            <span className="title">Ünvan</span>
          </div>
          <p>Ələsgər Qayıbov 12 22</p>
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
            <span className="title">Rezervasiya</span>
          </div>
          <p>
            070 805 03 05 <br /> 050 805 03 05
            
          </p>
        </div>
        <div className="boxFooter">
          <span className="icon">
            <AccessTimeOutlinedIcon fontSize="medium" />
          </span>
          <span className="title">İş saatları</span>
          <p>Bazar ertəsi: - Bazar: 09:00 - 00:00</p>
        </div>
        <div className="boxFooter">
          <h5>Əlaqə saxlayın</h5>
          <div className="emailSend">
            <input type="text" placeholder="E-poçt" />
            <div className="sendBtn">
              <ChevronRightOutlinedIcon fontSize="medium" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="downFooter">
        <div className="left">© Ədalət Restoran - Bütün hüquqlar qorunur.</div>
        {/* <div className="socials">
          <a href="https://www.facebook.com/nanelounge" target="_blank">
            <img src={fbc} alt="" />
          </a>
          <a href="https://www.instagram.com/naneterrace/" target="_blank">
            <img src={ins} alt="" />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
