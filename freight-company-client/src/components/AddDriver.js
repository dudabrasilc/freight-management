import { useState } from "react";

function AddDriver({ addDriver }) {
  const [submitted, setSubmitted] = useState("")
  const [checkDriver, setCheckDriver] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    years_of_experience: "",
    accidents: "",
    img_url: "",
    dl_class: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:9292/Drivers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(newDriver => {
      console.log(newDriver)
      setFormData({
        name: "",
        age: "",
        years_of_experience: "",
        accidents: "",
        img_url: "",
        dl_class: ""
      })
      addDriver(newDriver)
      setSubmitted("The driver was added to the system.")
      setCheckDriver("To check it, navigate to the Drivers tab.")
    })  
  }

}