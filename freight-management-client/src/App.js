import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css'
import './App.css';
import Home from './components/Home';
import LoadsPage from './components/LoadsPage';
import DriversPage from './components/DriversPage';
import AddDriver from './components/AddDriver';
import AddLoad from './components/AddLoad';
import AddTruck from './components/AddTruck';
import TrucksPage from './components/TrucksPage';

function App() {
  const [drivers, setDrivers] = useState([])
  const [loads, setLoads] = useState([])
  const [trucks, setTrucks] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/Drivers`)
    .then(r => r.json())
    .then(driversData => {
      setDrivers(driversData)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/Loads`)
    .then(r => r.json())
    .then(loadsData => {
      setLoads(loadsData)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/Trucks`)
    .then(r => r.json())
    .then(trucksData => {
      setTrucks(trucksData)
    })
  }, [])


  function addDriver(newDriver) {
    const newDriversArray=[...drivers, newDriver]
    setDrivers(newDriversArray)
  }

  function addLoad(newLoad) {
    const newLoadArray=[...loads, newLoad]
    setLoads(newLoadArray)
  }

  function addTruck(newTruck) {
    console.log(newTruck)
    const newTruckArray=[...trucks, newTruck]
    setTrucks(newTruckArray)
  }

  function deleteLoad(id) {
    let updatedLoadList = loads.filter(load => {
      return load.id !== id
    })
    setLoads(updatedLoadList)
  }

  function toggle() {
    let nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }

  function handleDelivered(updatedLoad) {
    const updatedLoads = loads.map((load) => {
      if (load.id === updatedLoad.id) {
        return updatedLoad;
      } else {
        return load;
      }
    });
    setLoads(updatedLoads);
  }

  return (
    <div className="App">
      <BrowserRouter>   
      <div className="topnav" id="myTopnav">
      <NavLink activeClassName="active" exact to="/">Home</NavLink>
      <NavLink activeClassName="active" exact to="/Loads">Loads</NavLink>
      <NavLink activeClassName="active" exact to="/Trucks">Trucks</NavLink>
      <NavLink activeClassName="active" exact to="/Drivers">Drivers</NavLink>
      <div className="dropdown">
        <button className="dropbtn">New
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <NavLink activeClassName="active" exact to="/AddLoad">Load</NavLink>
          <NavLink activeClassName="active" exact to="/AddTruck">Truck</NavLink>
          <NavLink activeClassName="active" exact to="/AddDriver">Driver</NavLink>
        </div>
      </div>
      <a className="icon" onClick={toggle}> </a>
    </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Loads">
            <LoadsPage loads={loads} deleteLoad={deleteLoad} handleDelivered={handleDelivered} drivers={drivers} trucks={trucks}/>
          </Route>
          <Route path="/Trucks">
            <TrucksPage trucks={trucks}/>
          </Route>
          <Route path="/Drivers">
            <DriversPage drivers={drivers} setDrivers={setDrivers}/>
          </Route>
          <Route path="/AddDriver">
            <AddDriver addDriver={addDriver}/>
          </Route>
          <Route path="/AddLoad">
            <AddLoad addLoad={addLoad} drivers={drivers} trucks={trucks}/>
          </Route>
          <Route path="/AddTruck">
            <AddTruck addTruck={addTruck}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;