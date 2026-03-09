import Tour from "./Tour";

export const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
      ))}
      </div>
    </section>
  );
};

export default Tours;