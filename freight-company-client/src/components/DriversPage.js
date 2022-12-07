import { Route, useRouteMatch, Switch } from "react-router-dom";
import DriversList from "./DriversList.js";
import DisplayDriver from "./DisplayDriver.js";
import DriverLoads from "./DriverLoads.js";


function DriversPage({ drivers, setDrivers, onUpdateDriver }) {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route exact path='/Drivers'>
        <DriversList drivers={ drivers } setDrivers={setDrivers} />
      </Route>
      </Switch>
)}