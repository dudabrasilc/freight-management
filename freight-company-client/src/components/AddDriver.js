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

}