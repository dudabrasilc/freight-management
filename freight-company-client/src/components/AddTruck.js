import { useState } from "react";

function AddTruck({ addTruck }) {
  const [truckSubmitted, setTruckSubmitted] = useState("")
  const [checkTruck, setCheckTruck] = useState("")
  const [formData, setFormData] = useState({
    truck_model: "",
    truck_color: "",
    license_plate: "",
    mileage: "",
    vin_number: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:9292/Trucks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(newTruck => {
      console.log(newTruck)
      setFormData({
        truck_model: "",
        truck_color: "",
        license_plate: "",
        mileage: "",
        vin_number: ""
      })
      addTruck(newTruck)
      setTruckSubmitted("The truck was added to the system.")
      setCheckTruck("To check it, navigate to the Trucks tab.")
    })  
  }
    
  return (
    <div className="form-style-8">
      <h2>Add a new truck</h2>
      <h3>Fill out the form below to add a new truck</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="truck_model" placeholder="Truck Model" value={formData.truck_model} onChange={handleChange}/>
        <input type="number" name="truck_color" placeholder="Truck Color" value={formData.truck_color} onChange={handleChange}/>
        <input type="number" name="license_plate" placeholder="License Plate" value={formData.license_plate} onChange={handleChange}/>
        <input type="number" name="mileage" placeholder="Mileage" value={formData.mileage} onChange={handleChange}/>
        <input type="text" name="vin_number" 
        placeholder="Vin Number" value={formData.vin_number} onChange={handleChange}/>
        <br></br>
      <button id="button" type="submit">Submit</button>
      <p className="submitted">{truckSubmitted}</p>
      <p className="submitted">{checkTruck}</p>
      </form>
    </div>
  )
}

export default AddTruck;