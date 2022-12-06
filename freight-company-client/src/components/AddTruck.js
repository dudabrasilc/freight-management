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
}