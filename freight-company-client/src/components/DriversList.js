import { Link } from 'react-router-dom';
import DriverCard from "./DriverCard";

function DriversList({ drivers, setDrivers }) {

  function handleRemoveDriver(removedDriver) {
    const updatedDriversList = drivers.filter((driver) => driver.id !== removedDriver.id);
    setDrivers(updatedDriversList);
  }
  
}