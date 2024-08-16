import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Coimbatore</span>
        <span className="fpPrice">Starting from Rs.2220</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://img.veenaworld.com/wp-content/uploads/2022/06/6-of-the-Coolest-Capsule-Hotels-in-Japan-scaled-e1657803676320.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Coolest capsule rooms</span>
        <span className="fpCity">Kerala</span>
        <span className="fpPrice">Starting from Rs.1140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://sthotelsmalta.com/wp-content/uploads/2022/06/modern-luxury-bedroom-suite-and-bathroom-with-working-table-scaled.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from Rs.5999</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.kingsmillshotel.com/wp-content/uploads/2019/05/1524241232GardenRoom1-800x525.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Bangaluru</span>
        <span className="fpPrice">Starting from Rs.1105</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
