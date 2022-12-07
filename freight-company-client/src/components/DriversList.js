import { Link } from 'react-router-dom';
import DriverCard from "./DriverCard";

function DriversList({ drivers, setDrivers }) {

  function handleRemoveDriver(removedDriver) {
    const updatedDriversList = drivers.filter((driver) => driver.id !== removedDriver.id);
    setDrivers(updatedDriversList);
  }

  const driversArray = drivers.map(driver => {
    return (
      <li key={driver.id}>
        <Link to={`Drivers/${driver.id}`}>
          <DriverCard onRemoveDriver={handleRemoveDriver} name={driver.name} id= {driver.id} img_url={driver.img_url}/>
        </Link>
      </li>
    )
  })

}