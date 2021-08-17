const { compose } = require("recompose");
const { withScriptjs, withGoogleMap, GoogleMap } = require("react-google-maps");
const {
  MarkerWithLabel,
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerWithLabel = compose(
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap 
  onClick={ev => {
      alert("latitide = ", ev.latLng.lat());
      console.log("longitude = ", ev.latLng.lng());
    }}
  defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <MarkerWithLabel
    onClick={ev => {
      console.log("latitide = ", ev.latLng.lat());
      console.log("longitude = ", ev.latLng.lng());
    }}
      position={{ lat: -34.397, lng: 150.644 }}
      //   labelAnchor={new google.maps.Point(0, 0)}
      labelStyle={{
        backgroundColor: "yellow",
        fontSize: "32px",
        padding: "16px",
      }}
    >
      <div>Hello There!</div>
    </MarkerWithLabel>
  </GoogleMap>
));

const Map = () => {
  return (
    <div>
      <MapWithAMarkerWithLabel
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCccVle225nxVsChsR9cGh-Tz1wLvKgeT8&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
       />
    </div>
  );
};
export default Map;
