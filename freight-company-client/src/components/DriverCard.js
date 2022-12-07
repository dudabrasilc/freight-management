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

}