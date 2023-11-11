import { useState, useEffect } from "react";


export default function Clock(props) {
  const [date, setDate] = useState(null); // Note: Never set this to unknown data obtained at run time (ie: new Date(), a random number, etc.)
  
  useEffect(() => {
    setDate(new Date());
    // update the date once every second
    const timerID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      // clean up the effect
      clearInterval(timerID);
    };
  }, []);
  
  return (
    <p>
      Locale: {props.locale}: {date?.toLocaleTimeString(props.locale)}{" "}
    </p>
  );
}
  