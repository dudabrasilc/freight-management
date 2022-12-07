import { useParams, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DriverLoads from './DriverLoads';
import DriverTrucks from './DriverTrucks';

function DisplayDriver({ drivers, onUpdateDriver }) {
  const [drugTestPassed, setDrugTestPassed] = useState(false)
  const [drivingRecord, setDrivingRecord] = useState(false)
  const [driverLoads, setDriverLoads] = useState([])
  const [driverTrucks, setDriverTrucks] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [showTrucks, setShowTrucks] = useState(false)
}