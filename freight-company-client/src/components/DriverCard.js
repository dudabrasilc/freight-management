function DriverCard({ name, img_url, id, onRemoveDriver }) { 

  function handleDelete() {
    fetch(`http://localhost:9292/Drivers/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then((driver) => {
      onRemoveDriver(driver)
    });
  }

  return (
    <div className="card">
      <img src={img_url} alt={"driver picture"} />
      <h3 className="driver-name">{name}</h3>
      <button className="card-btn delete" onClick={handleDelete}>Remove</button>
    </div>
  )
}
  
export default DriverCard;
