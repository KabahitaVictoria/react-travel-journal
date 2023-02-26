import "./App.css";
import { Nav } from "./Nav";
import { Card } from "./Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
      key={item.id}
      item={item}
      />
    );
  });   

  return (
    <div className="App">
      <Nav />
      {cards}
    </div>
  );
}

export default App;
