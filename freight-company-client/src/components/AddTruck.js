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
}