import { useRouteMatch, useParams, Link } from 'react-router-dom'

function TrucksPage({ trucks }) {
  const match = useRouteMatch()
  const params = useParams()

  const trucksList = trucks.map(truck => {
    return (
      <li key={truck.id}>
        <h3>Truck Number #{truck.id}</h3>
        {/* <Link to={`Drivers/${load.driver_id}`}>
          <p>Click to see the driver for this load</p>
        </Link> */}
        <p> ‣ Truck Model: {truck.truck_model}</p>
        <p> ‣ Truck Color: {truck.truck_color}</p>
        <p> ‣ License Plate: {truck.license_plate}</p>
        <p> ‣ Mileage: {truck.mileage}</p>
        <p> ‣ Vin Number: {truck.vin_number}</p>
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
