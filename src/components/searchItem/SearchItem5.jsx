import "./searchItem.css";

const SearchItem5 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/206683386.webp?k=95eaa6b457575745ee3b49d7fd617695e5e7f3f62514daee3ea0d8b45d295a79&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Baverely Villa</h1>
        <span className="siDistance">5km from centre</span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">
          Air conditioning 
        </span>
        <span className="siFeatures">
           Economy double bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Fabulous</span>
          <button>9.5</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs.3000</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem5;
