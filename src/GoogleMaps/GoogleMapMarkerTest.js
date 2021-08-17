import React from "react";
import GoogleMapReact from "google-map-react";
const GoogleMapMarkerTest = ({ state }) => {
  var lat = state.lat;
  var lng = state.lng;
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat, lng },
      map,
      title: "i will add a tooltip for this location",
    });
    return marker;
  };
  return (
    //   AIzaSyCccVle225nxVsChsR9cGh-Tz1wLvKgeT8
    <div style={{ width: "110%", height: "430px" }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: "AIzaSyCccVle225nxVsChsR9cGh-Tz1wLvKgeT8" }}
        defaultCenter={{ lat, lng }}
        defaultZoom={16}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  );
};

export default GoogleMapMarkerTest;
