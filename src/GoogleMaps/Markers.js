import React, { useState, useEffect } from "react";
import GoogleMapMarkerTest from "./GoogleMapMarkerTest";
const Markers = () => {
  const [state, setstate] = useState();
  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setstate({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    }
  }, []);
   return (
    <div> {state?<GoogleMapMarkerTest state={state} />:null}</div>
  );
};

export default Markers;
