import { useState } from "react";

function AddLoad({ addLoad, drivers, trucks }) {
  const [formData, setFormData] = useState({
    pickup_address: "",
    dropoff_address: "",
    pickup_date: "",
    dropoff_date: "",
    pickup_time: "",
    dropoff_time: "",
    weight: "",
    rate: "",
    driver_id: "",
    truck_id: ""
  })
  const [loadSubmitted, setLoadSubmitted] = useState("")
  const [checkLoad, setCheckLoad] = useState("")

  const handleChange = (e) => {
    console.log(e.target.type)
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:9292/Loads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(newLoad => {
      console.log(newLoad)
      setFormData({
        pickup_address: "",
        dropoff_address: "",
        pickup_date: "",
        dropoff_date: "",
        pickup_time: "",
        dropoff_time: "",
        weight: "",
        rate: "",
        driver_id: "",
        truck_id: ""
      })
      addLoad(newLoad)
      setLoadSubmitted("The load was added to the system.")
      setCheckLoad("To check it, navigate to the Loads tab.")
    })  
  }

  const driversList = drivers.map(driver => {
    return (
      <option key={driver.id} name="driver_id" value={driver.id}>{driver.name}</option>
    )
  })

  const trucksList = trucks.map(truck => {
    return (
      <option key={truck.id} name="truck_id" value={truck.id}>{truck.truck_color} {truck.truck_model}</option>
    )
  })
    
  return (
    <div className="form-style-8">
      <h2>Add a new load</h2>
      <h4>Fill out the form below to add a new load</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="pickup_address" placeholder="Pickup Address" value={formData.pickup_address} onChange={handleChange}/>
        <input type="text" name="dropoff_address" placeholder="Dropoff Address" value={formData.dropoff_address} onChange={handleChange}/>
        <input type="text" name="pickup_date" placeholder="Pickup Date (mm/dd/yyyy)" value={formData.pickup_date} onChange={handleChange}/>
        <input type="text" name="dropoff_date" placeholder="Dropoff Date (mm/dd/yyyy)" value={formData.dropoff_date} onChange={handleChange}/>
        <input type="text" name="pickup_time" placeholder="Pickup Time" value={formData.pickup_time} onChange={handleChange}/>
        <input type="text" name="dropoff_time" placeholder="Dropoff Time" value={formData.dropoff_time} onChange={handleChange}/>
        <input type="text" name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange}/>
        <input type="text" name="rate" placeholder="Rate" value={formData.rate} onChange={handleChange}/>
        <select value={formData.driver_id} name="driver_id" onChange={handleChange}>
          <option value="none">Select a Driver</option>
          {driversList}
        </select>
        <select value={formData.truck_id} name="truck_id" onChange={handleChange}>
          <option value="none">Select a Truck</option>
          {trucksList}
        </select>
        <br></br>
        <button id="button" type="submit">Submit</button>
        <br></br>
        <p className="submitted">{loadSubmitted}</p>
        <p className="submitted">{checkLoad}</p>
      </form>
    </div>
  )
}

export default AddLoad;