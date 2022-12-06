import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';


function App() {

  useEffect(() => {
    fetch(`http://localhost:9292/Drivers`)
    .then(r => r.json())
    .then(driversData => {
      setDrivers(driversData)
      console.log(driversData)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/Loads`)
    .then(r => r.json())
    .then(loadsData => {
      setLoads(loadsData)
      console.log(loadsData)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:9292/Trucks`)
    .then(r => r.json())
    .then(trucksData => {
      setTrucks(trucksData)
      console.log(trucksData)
    })
  }, [])

  function addDriver(newDriver) {
    console.log(newDriver)
    const newDriversArray=[...drivers, newDriver]
    setDrivers(newDriversArray)
  }

  function addLoad(newLoad) {
    console.log(newLoad)
    const newLoadArray=[...loads, newLoad]
    setLoads(newLoadArray)
  }

  function addTruck(newTruck) {
    console.log(newTruck)
    const newTruckArray=[...trucks, newTruck]
    setLoads(newTruckArray)
  }

  function toggle() {
    let nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }

  // Debug
  return (
    <div className="App">
      <BrowserRouter>   
      <div className="topnav" id="myTopnav">
      <NavLink activeClassName="active" exact to="/">Home</NavLink>
      <NavLink activeClassName="active" exact to="/Loads">Loads</NavLink>
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
      <a className="icon" onClick={toggle}></a>
    </div>
      </BrowserRouter>
    </div>
  )
}