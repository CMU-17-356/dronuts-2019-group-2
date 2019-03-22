import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Autocomplete from "./Places";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      place: {},
      selectedPlace: {},
      currentLocation: {
        lat: 39.5,
        lng: -98.35
      },
      zoom: 3,
      buttonText: "Get Currrent Location"
    }
    this.locate = this.locate.bind(this);
  }
  locate() {
    console.log("locating...")
        this.setState({
                    buttonText: "Loading..."
                });
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }, zoom: 17, buttonText: "Get Currrent Location"
                }, () => {
                  this.props.updateLocation(this.state.currentLocation);
              });
                
            })
        }
  }

  showPlaceDetails(place) {
    this.setState({currentLocation:place.geometry.location, zoom: 17}, () => {
                  this.props.updateLocation(this.state.currentLocation);
              });
  }
  
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
      <div>
      <button className="mapButton" onClick={this.locate}>{this.state.buttonText}</button>
      <div className="placeBox">
      <Autocomplete onPlaceChanged={this.showPlaceDetails.bind(this)} />
      </div>
      <div className="mapContainer">
        <Map
          style={{
            width: "100%",
            height: "300px",
            position: "relative"
          }}
          google={this.props.google}
          zoom={this.state.zoom}
          initialCenter={{
              lat: this.state.currentLocation.lat, 
              lng: this.state.currentLocation.lng
            }}
          center={this.state.currentLocation}  
          fullscreenControl={false}
          streetViewControl={false}
        >
          <Marker
            position={this.state.currentLocation}
            draggable={true}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAercP4-k1r3tlmqwEb1VYDJ_2eDcthFn4",
  v: "3"
})(MapContainer);
