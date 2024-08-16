import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel2 = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506482122.jpg?k=387cb12dd4bb03eea8a41e8e5ed369730196ae10a77a2fc22f9cbcfe546de36a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506482141.jpg?k=f960713b1955827916ef8de5863f04b68aa751952a75dcaaadda3e71780aa3b7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506482165.jpg?k=aaf6b9940762ea5a06074fa6ef8ad3600bb93fa54cce6aeb55f6e6305c9e167f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506482160.jpg?k=b8928e56c95b566bf5fb629863bbe71149320911e80f054d9c23b6895b5dd9dc&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506482139.jpg?k=e7ac10a2318414fc049ab9e34528830358be5f107603ebc07f34dee5f7312f9a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506484303.jpg?k=3b6b71aad9277d6558c952c0d7b5e30ef0c15aa17637e3b521e719b0fc2823a3&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          
          <h1 className="hotelTitle">Fabhotel snow drop</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>2.8km from centre</span>
          </div>         <span className="hotelDistance">
            Excellent location - 100m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over Rs.1000 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              You're eligible for a Genius discount at FabHotel Snow Drop! To save at this property, all you have to do is sign in.

Set within 4.6 km of Coimbatore Junction and 10 km of Podanur Junction, FabHotel Snow Drop features rooms in Coimbatore. This 3-star hotel offers room service, a 24-hour front desk and free WiFi. The property is non-smoking and is situated 9 km from Codissia Trade Fair Complex.

At the hotel rooms are equipped with air conditioning, a seating area, a flat-screen TV with cable channels, a safety deposit box and a private bathroom with a shower. At FabHotel Snow Drop every room has bed linen and towels.

Guests at the accommodation can enjoy an à la carte or a vegetarian breakfast.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>RS.1000</b> (1 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel2;
