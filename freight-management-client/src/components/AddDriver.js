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
    
  return (
    <div className="form-style-8">
      <h2>Add a new driver</h2>
      <h3>Fill out the form below to add a new driver</h3>
      <form onSubmit={handleSubmit}>  
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange}/>
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange}/>
        <input type="number" name="years_of_experience" placeholder="Years of Experience" value={formData.years_of_experience} onChange={handleChange}/>
        <input type="number" name="accidents" placeholder="Accidents" value={formData.accidents} onChange={handleChange}/>
        <input type="text" name="img_url" 
        placeholder="Profile Picture (URL)" value={formData.img_url} onChange={handleChange}/>
        <select value={formData.dl_class} name="dl_class" onChange={handleChange}>
          <option value="none">Driver's License Class</option>
          <option value="A">Class A</option>
          <option value="B">Class B</option>
          <option value="C">Class C</option>
        </select>
        <br></br>
        <button id="button" type="submit">Submit</button>
        <br></br>
        <p className="submitted">{submitted}</p>
        <p className="submitted">{checkDriver}</p>
      </form>
    </div>
  )
}

export default AddDriver;
