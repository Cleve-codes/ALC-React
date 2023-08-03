import "./index.css";

const ints = [1, 2, 3];

function App() {
  return (
    <div className="App">
      <ul>
        <ListItems />
      </ul>
    </div>
  );
}

export default App;

function ListItems() {
  return (
    <>
      {ints.map((int) => (
        <li>{int}</li>
      ))}
    </>
  );
}
