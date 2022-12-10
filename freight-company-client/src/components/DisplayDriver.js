import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useRouteMatch } from "react-router-dom";
import DriverLoads from './DriverLoads';
import DriverTrucks from './DriverTrucks';


function DisplayDriver({ drivers, onUpdateDriver }) {

  const params = useParams()
  const matched = drivers.filter(driver => {
    return Number(params.id) === driver.id
  })
  console.log(matched)

  const match = useRouteMatch()
  // console.log(match)

  const [driverLoads, setDriverLoads] = useState([])
  const [driverTrucks, setDriverTrucks] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [showTrucks, setShowTrucks] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:9292/${match.url}/Loads`)
    .then(r => r.json())
    .then(loads => {
      setDriverLoads(loads)
      console.log(loads)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/${match.url}/Trucks`)
    .then(r => r.json())
    .then(trucks => {
      setDriverTrucks(trucks)
      console.log(trucks)
    })
  }, [])

  const handleShow = () => setShowResults(showResults => !showResults)
  
  const handleShowTrucks = () => setShowTrucks(showTrucks => !showTrucks)

  let matchedObj = matched[0]

  if (!matchedObj) {
    return (
      <>
        <br></br>
        <br></br>
        <br></br>
        <h1>Driver was removed successfully.</h1>
        <h3>To go back, navigate to the Drivers tab.</h3>
      </>
    )
  } else {
    return (
      <div className="display">
        <img className="image-display" src={matched[0].img_url} alt="image" />

        <h2>{matched[0].name}</h2>
        <p>Age: {matched[0].age}</p>
        <p>Years of Experience: {matched[0].years_of_experience}</p>
        <p>Accidents: {matched[0].accidents}</p>
        <p>Driver's License Class: {matched[0].dl_class}</p>
        <hr></hr>
        <div>
            <input type="submit" className="button medium regular white" value={showResults ? "Hide Loads" : "Display loads" } onClick={handleShow} />
            { showResults ? <DriverLoads driverLoads={driverLoads}/> : null }
        </div>
        <hr></hr>
        <div>
            <input type="submit" className="button medium regular white" value={showTrucks ? "Hide Trucks" : "Display Trucks" } onClick={handleShowTrucks} />
            { showTrucks ? <DriverTrucks driverTrucks={driverTrucks}/> : null }
        </div>
      </div>
    )
  }
}

export default DisplayDriver;
