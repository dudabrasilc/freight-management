import { useRouteMatch, useParams } from 'react-router-dom'
import Load from './Load';

function LoadsPage({ loads, deleteLoad, handleDelivered }) {
  const match = useRouteMatch()
  const params = useParams()

  const loadsList = loads.map(load => {
    return (
      <li key={load.id}>
        <Load load={load} deleteLoad={deleteLoad} handleDelivered={handleDelivered}/>
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
