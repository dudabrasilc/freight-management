import { useRouteMatch, useParams, Link } from 'react-router-dom'

function TrucksPage({ trucks }) {
  const match = useRouteMatch()
  const params = useParams()

  const trucksList = trucks.map(truck => {
    return (
      <li key={truck.id}>
        <h2>Truck #{truck.id}</h2>
        <p><b>‣ Truck Identification Number:</b> {truck.id}</p>
        <p><b>‣ Truck Model: </b> {truck.truck_model}</p>
        <p><b>‣ Truck Color: </b> {truck.truck_color}</p>
        <p><b>‣ License Plate: </b> {truck.license_plate}</p>
        <p><b>‣ Mileage: </b> {truck.mileage}</p>
        <p><b>‣ Vin Number:</b>  {truck.vin_number}</p>
      </li>  
    )
  })
  
  return (
    <div className="display">
      <h1>Trucks:</h1>
      <ul>
        {trucksList}
      </ul>
    </div>
  )
}

export default TrucksPage;
