import { useState } from "react";

function AddLoad({ addLoad }) {
  const [formData, setFormData] = useState({
    pickup_address: "",
    dropoff_address: "",
    pickup_date: "",
    dropoff_date: "",
    pickup_time: "",
    dropoff_time: "",
    weight: "",
    rate: ""
  })
  const [loadSubmitted, setLoadSubmitted] = useState("")
  const [checkLoad, setCheckLoad] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
        rate: ""
      })
      addLoad(newLoad)
      setLoadSubmitted("The load was added to the system.")
      setCheckLoad("To check it, navigate to the Loads tab.")
    })  
  }
}