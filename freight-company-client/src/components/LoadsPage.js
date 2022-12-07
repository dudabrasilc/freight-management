import { useRouteMatch, useParams, Link } from 'react-router-dom'

function LoadsPage({ loads }) {
  const match = useRouteMatch()
  const params = useParams()

  const loadsList = loads.map(load => {
    return (
      <li key={load.id}>
        <h3>Load Number #{load.id}</h3>
        <Link to={`Drivers/${load.driver_id}`}>
          <p>Click to see the driver for this load</p>
        </Link>
        <p> ‣ Pickup Address: {load.pickup_address}</p>
        <p> ‣ Dropoff Address: {load.dropoff_address}</p>
        <p> ‣ Pickup Date: {load.pickup_date}</p>
        <p> ‣ Dropoff Date: {load.dropoff_date}</p>
        <p> ‣ Pickup Time: {load.pickup_time}</p>
        <p> ‣ Dropoff Time: {load.dropoff_time}</p>
        <p> ‣ Weight: {load.weight}</p>
        <p> ‣ Rate: {load.rate}</p>
      </li>  
    )
  })
  
  return (
    <div className="display">
      <h1>Loads:</h1>
      <ul>
        {loadsList}
      </ul>
    </div>
  )
}

export default LoadsPage;