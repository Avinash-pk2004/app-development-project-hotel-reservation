import "./searchItem.css";

const SearchItem6 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/453514236.webp?k=64d26a1b8c06479e8aca8b94be15b4c559a5997e904254c8a59184dbc5886409&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Away from home-1</h1>
        <span className="siDistance">9km from centre</span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">
          Breakfast included
        </span>
        <span className="siFeatures">
           Queen room with Garden view
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Good</span>
          <button>7.1</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs.1500</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem6;
