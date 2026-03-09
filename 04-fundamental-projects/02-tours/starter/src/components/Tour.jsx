import {useState} from "react";

export default function Tour({tour, removeTour}) {

  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img className="img" src={tour.image} alt={tour.name} />
      <span className="tour-price">${tour.price}</span>
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>{readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button type="button" className="btn btn-block delete-btn" onClick={() => removeTour(tour.id)}>
        Not Interested
      </button>
      </div>
    </article>
  );
}