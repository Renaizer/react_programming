import React, { useEffect, useState } from 'react';


export default function DateAndTime() {
   
  
      const [timet, setTimet] = useState(new Date());

      useEffect(()=>{
        const timer= setInterval(()=>{setTimet(new Date());}, 1 * 1000);

        return () => {
            clearInterval(timer);
        }

      }, []);

      const time = timet.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric'});
      const dayFormatted = timet.getDate();
      const monthFormatted = timet.getMonth()+1;
      const yearFormatted = timet.getFullYear();

    return (
        <>
            {time}
            <br/>
            {dayFormatted}/{monthFormatted}/{yearFormatted}
        </>
    )
}
