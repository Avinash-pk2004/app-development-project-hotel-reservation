import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem2 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/506482122.webp?k=64c3fc9b910ad6006e20f624eae2fbb47498b05482d2b4d5ab4c60e64f336b96&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Fabhotel snow drop</h1>
        <span className="siDistance">2.8km from centre</span>
        <span className="siTaxiOp">Limited time deal</span>
        <span className="siSubtitle">
          Air conditioning with food accommodations
        </span>
        <span className="siFeatures">
          1 double bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs.1000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/see2"><button className="siCheckButton">See availability</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem2;
