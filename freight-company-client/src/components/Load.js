import { Link } from 'react-router-dom';
import { useState } from 'react';

function Load({ load, deleteLoad, handleDelivered}) {
  const [delivered, setDelivered] = useState(load.delivered)

  function handleDelete() {
    fetch(`http://localhost:9292/Loads/${load.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      deleteLoad(load.id)
    })
  }

  function clickDelivered() {
    setDelivered(delivered => !delivered)
    fetch(`http://localhost:9292/Loads/${load.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      delivered: !delivered
    })
  })
    .then((r) => r.json())
    .then((updated) => {
      console.log(updated)
      handleDelivered(updated)
    });
  }

  return (
    <div>
      <h2>Load #{load.id}</h2>
      <p>‣ Check the box below if the load was delivered:</p>
      <button className="selected" onClick={clickDelivered}>{delivered ? "☑️" : "☐"}</button>
      <Link to={`Drivers/${load.driver_id}`}>
        <p>Click to see the driver for this load</p>
      </Link>
      <p><b>‣ Pickup Address:</b> {load.pickup_address}</p>
      <p><b>‣ Dropoff Address:</b> {load.dropoff_address}</p>
      <p><b>‣ Pickup Date:</b> {load.pickup_date}</p>
      <p><b>‣ Dropoff Date:</b> {load.dropoff_date}</p>
      <p><b>‣ Pickup Time:</b> {load.pickup_time}</p>
      <p><b>‣ Dropoff Time: </b> {load.dropoff_time}</p>
      <p><b>‣ Weight:</b> {load.weight}</p>
      <p><b>‣ Rate: </b> {load.rate}</p>
      <p><b>‣ Driver Identification Number: </b> {load.driver_id}</p>
      <p><b>‣ Truck Identification Number: </b> {load.truck_id}</p>
      <button className="button medium regular white" onClick={handleDelete}>Remove Load</button>
      <hr></hr>
    </div>
  )
}

export default Load;