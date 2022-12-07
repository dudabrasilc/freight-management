import { useParams, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DriverLoads from './DriverLoads';
import DriverTrucks from './DriverTrucks';

function DisplayDriver({ drivers, onUpdateDriver }) {
  const [driverLoads, setDriverLoads] = useState([])
  const [driverTrucks, setDriverTrucks] = useState([])
  const [drugTestPassed, setDrugTestPassed] = useState(false)
  const [drivingRecord, setDrivingRecord] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showTrucks, setShowTrucks] = useState(false)

  const match = useRouteMatch()
  console.log(match.url)

  const params = useParams()
  const matched = drivers.filter(driver => {
    return Number(params.id) === driver.id
  })

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
}