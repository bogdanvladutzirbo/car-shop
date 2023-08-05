import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const [cars, setCars] = useState([
    {
      carId: "1234",
      mark: "Volkswagen",
      model: "Golf",
      category: "Saloon",
      firstRegistration: "05/2019",
      power: "135kW(184Hp)",
      cubicCapacity: "1968ccm",
      fuel: "Diesel",
      gearBox: "Automatic transmision",
      mileage: "69979km",
      transmision: "FWD",
      doors: "4/5",
      description: "Golf 7 for sale",
      price: 26870,
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:3002/car-shop/cars")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setCars(data.cars);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // console.log(cars.filter((car) => car.mark.includes("V")));
  return (
    // https://medium.com/@64rohanmalo/fetch-and-display-data-from-an-api-with-react-228de56bb446
    <div className="App">
      <h1>Input value: {input}</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <h1>Cars</h1>
      <ol>
        {cars
          .filter((car) => car.mark.toLowerCase().includes(input))
          .map((car) => (
            <li key={car.carId}>
              Mark: {car.mark}, Model: {car.model}, Category: {car.category},
              FirstRegistration: {car.firstRegistration}, Fuel: {car.fuel},
              Mileage: {car.mileage}, Price: {car.price}
            </li>
          ))}
      </ol>
    </div>
  );
}

export default App;
