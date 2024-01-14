import { useState } from "react";
import data from "../src/data";
import List from "./List";
const App = () => {
  const [people, setPeople] = useState(data);
  const handleClick = () => {
    setPeople([]);
  };
  return (
    <div className="container">
      <h3>{people.length} Birthday today</h3>
      <List people={people} />
      <button type="button" className="btn person-btn" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
};
export default App;
