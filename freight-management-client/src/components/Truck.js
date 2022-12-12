function Truck({ truck }) {

  return (
    <>
      <h2>Truck #{truck.id}</h2>
      <p><b>‣ Truck Model: </b> {truck.truck_model}</p>
      <p><b>‣ Truck Color: </b> {truck.truck_color}</p>
      <p><b>‣ License Plate: </b> {truck.license_plate}</p>
      <p><b>‣ Mileage: </b> {truck.mileage}</p>
      <p><b>‣ Vin Number:</b>  {truck.vin_number}</p>
      <hr></hr>
    </>
  )
}

export default Truck;