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
}