function DriverTrucks({ driverTrucks}) {
  const trucksList = driverTrucks.map(truck => {
    return (
        <li key={truck.id}>
          <h3>Truck Number #{truck.id}</h3>
          <p> ‣ Model: {truck.truck_model}</p>
          <p> ‣ Color: {truck.truck_color}</p>
          <p> ‣ License Plate: {truck.license_plate}</p>
          <p> ‣ Mileage: {truck.mileage}</p>
          <p> ‣ Vin: {truck.vin_number}</p>  
        </li>  
    )
  })

}