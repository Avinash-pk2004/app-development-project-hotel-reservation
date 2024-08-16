import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem1 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/252837602.webp?k=cd82137788770333971b35d83bcfef7fa3d3e81b86a8f5e624870e326a9a08f7&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Heyday Student Accommodation</h1>
        <span className="siDistance">100m from city</span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">
          Air conditioning and full kitcher setup
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • m² 1 full bed
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
          <span className="siPrice">Rs.5000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to="/see"><button className="siCheckButton">See availability</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem1;
