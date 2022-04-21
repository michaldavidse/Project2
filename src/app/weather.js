import React, { useState, useEffect } from 'react'

export const Weather = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [city, setCity] = useState('Geel');




  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=51.16257&lon=4.99084&appid=67bcaab0581bd33faa6e8a3a5b497f62&units=metric")
      .then(res =>res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.main);
          setCity(result.name);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])



  if (error) {
    return( <div>Error: {error.message}</div>);
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items)
    return (
      <section> 
         <h5 className='mt-5'> <i class="fa-solid fa-cloud-sun"></i>Weer te Geel</h5>
     <div> 
       De huidige temperatuur is {items.temp} °C te {city} (maar voelt aan als {items.feels_like}°C). <br/>
       De verwachte minimum temperatuur is {items.temp_min} en maximum {items.temp_max} °C.
     </div>
      </section>
     
     
    );
  }
}




export default Weather