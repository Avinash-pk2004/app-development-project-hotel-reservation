import "./searchItem.css";

const SearchItem3 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/570296235.webp?k=aab1360c4cf94733df9f28e4d5a5ea6732e03af152a73d4e5e516c9100d6c4d6&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hotel President park</h1>
        <span className="siDistance">1km from centre</span>
        <span className="siTaxiOp">Getaway deal</span>
        <span className="siSubtitle">
          Air conditioning with food accommodations and breakfast included
        </span>
        <span className="siFeatures">
          standard double bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Fabulous</span>
          <button>8.5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs.2375</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem3;
