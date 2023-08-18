import React, { useState } from "react";
import data from './data'
// import Tours from './component/Tours';
import Tours  from "./component/tours";

const App = () => {

// here using useState
const[tours, setTours] = useState(data)

function removeTour(id){
    const newTour = tours.filter(tour => tour.id !==id)
    setTours(newTour)
}     
   if(tours.length == 0){
    return(
      <div className="refresh">
        <h2>No Tours left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
   }
 
  return (
  <div className="App">
    {/* here tours as a proops pass in Tours  */}
    <Tours tours={tours} removeTour={removeTour}></Tours>
  </div>
  )
};

export default App;
