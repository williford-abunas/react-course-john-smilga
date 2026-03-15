import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import Button from "./Button";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
    setIndex(checkNumber(index + 1));
  }

  const prevPerson = () => {
    setIndex(checkNumber(index - 1));
  }     
  

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  }

  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <Button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </Button>
        <Button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </Button>
      </div>
      <Button onClick={randomPerson} className="btn btn-hipster">
        surprise me
      </Button>
    </article>
  </main>;
};
export default App;
