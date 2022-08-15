import './App.css';

// components
import CarDetails from './components/CarDetails';

const cars = [
  {id: 1, brand: "VW"},
  {id: 2, brand: "Ford"},
  {id: 3, brand: "MousePad"},
]

function App() {
  return (
    <div className="App">
      <h1>Car details</h1>
      {cars.map((car) => (
        <CarDetails car={car} />
      ))}
    </div>
  );
}

export default App;
