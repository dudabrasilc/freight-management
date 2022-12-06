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

}