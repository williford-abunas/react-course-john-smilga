import { useState } from "react";

const LoremIpsumForm = ({text}) => {

   const [count, setCount] = useState(1);
  const [displayedText, setDisplayedText] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (isNaN(amount) || amount < 1) {
      amount = 1;
    } else if (amount > 8) {
      amount = 8;
    }
    setDisplayedText(text.slice(0, amount));
  }

  return (
    <>
    <form className="lorem-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="count">Paragraphs:</label>
        <input type="number" id="count" name="count" min="1" step="1" max="8" onChange={(e) => setCount(e.target.value)} value={count} />
      </div>
      <button className='btn' type="submit">Generate</button>
   

    </form>
     {displayedText.length > 0 && (
      <article className="lorem-text">
        {displayedText.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </article>
    ) || "Click the button to generate some text!"}
    </>
    
  )
}

export default LoremIpsumForm