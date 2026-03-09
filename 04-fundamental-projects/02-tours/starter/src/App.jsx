import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if(!response.ok) {
        throw new Error('Network response was not ok');
      }
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.error('Error fetching tours:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return <main><Loading /></main>;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
  }

  return <main><Tours tours={tours} removeTour={removeTour}/></main>;
};
export default App;
