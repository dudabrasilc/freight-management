import Load from './Load';

function LoadsPage({ loads, deleteLoad, handleDelivered, drivers, trucks }) {

  const loadsList = loads.map(load => {
    return (
      <li key={load.id}>
        <Load load={load} deleteLoad={deleteLoad} handleDelivered={handleDelivered} drivers={drivers} trucks={trucks}/>
      </li>
    )
  })
  
  return (
    <div className="display">
      <h1>Loads:</h1>
      <ul>
        {loadsList}
      </ul>
    </div>
  )
}

export default LoadsPage;
