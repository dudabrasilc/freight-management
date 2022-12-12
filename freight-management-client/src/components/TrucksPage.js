import Truck from './Truck';

function TrucksPage({ trucks }) {

  const trucksList = trucks.map(truck => {
    return (
      <li key={truck.id}>
        <Truck truck={truck} />
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
