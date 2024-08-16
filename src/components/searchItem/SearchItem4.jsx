import "./searchItem.css";

const SearchItem4 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/232843094.webp?k=d0aa5e6671a71efe0c095983034e17bfdd733dfc2a1317541305ae0cc3c5de9b&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Raddison blu Coimbatore</h1>
        <span className="siDistance">3.9km from centre</span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">
          Air conditioning with food accommodations and breakfast included
        </span>
        <span className="siFeatures">
           Superior room standard double bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Superb</span>
          <button>9.1</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs.6240</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem4;
