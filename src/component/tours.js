import Card from './Card';
function Tours({tours,removeTour}){
  return ( 
  <div className='conatiners'>
       <div>
           <h2 className='title'>Plan With Dhruba</h2>
       </div>


            {/* 7 city data pass by proops and here single line diya all  city insert by map function */}
       <div className='cards'>
           {
            tours.map( (tour) => { 
                return <Card {...tour} removeTour={removeTour}></Card>
            })
            }
        </div>
      
  </div>
  );
}
export default Tours;