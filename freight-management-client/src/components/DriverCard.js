function DriverCard({ name, img_url }) { 

  return (
    <div className="card">
      <img src={img_url} alt={"driver picture"} />
      <h3 className="driver-name">{name}</h3>
      
    </div>
  )
}
  
export default DriverCard;
