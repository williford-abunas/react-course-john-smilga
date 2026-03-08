import data from "./data";
import { useState } from "react";
import Person from "./components/Person";
import Button from "./components/Button";
import List from "./components/List";

const App = () => {
const [people, setPeople] = useState(data);


  return (
    <main>
      <section className="container">
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      {people.length > 0 && (
        <Button onClick={() => setPeople([])}>Clear All</Button>
      )}
      </section>
    </main>
  );
};
export default App;
