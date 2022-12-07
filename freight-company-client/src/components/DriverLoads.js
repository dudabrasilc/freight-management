function DriverLoads({ driverLoads }) {
  console.log(driverLoads)

  const loadsList = driverLoads.map(load => {
    return (
        <li key={load.id}>
          <h3>Load Number #{load.id}</h3>
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
    <div>
      <h2>Loads:</h2>
      <ul>
        {loadsList}
      </ul>
    </div>
  )
}

export default DriverLoads;