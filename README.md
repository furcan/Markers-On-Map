<p align="center">
  <img src="https://raw.githubusercontent.com/furcan/Markers-On-Map/master/github-cover.png" width="768" height="auto" alt="Markers On Map">
</p>


# Markers On Map
Use highly customizable maps (Google Maps) with multiple custom Markers in your web projects.


### Current Version
1.3.0 [*](https://github.com/furcan/Markers-On-Map/blob/master/ReleaseNotes.md)

### Website and Demo
https://furcan.github.io/Markers-On-Map/

---------

#### Install

##### [npm](https://www.npmjs.com/package/markers-on-map)
```
npm i markers-on-map
```
##### [yarn](https://yarnpkg.com/en/package/markers-on-map)
```
yarn add markers-on-map
```

---------

#### 1- JavaScript

```html
<script src="dist/markers-on-map-1.3.0.js"></script>
```

#### 2- Initialize (Basic)

```js
// Basic usage
MarkersOnMap.Init({
  // required => Google Maps JavaScript API Key (in string format)
  googleApiKey: null, 

  // map markers options => at least one marker object required
  markerObjects: [ 
    {
      // required => marker latitude
      markerLat: 39.925018, 
      // required => marker longitude
      markerLong: 32.836956, 
    }
  ],
});
```

#### 3- Run

```js
// Select your element (ID or Class)
MarkersOnMap.Run('div#GoogleMaps');
```

---------

#### 4- Remarker

```js
// Use "MarkersOnMap.Remarker()" function to replace all markers to new ones.

// Call the function with an array includes new marker objects => MarkersOnMap.Remarker([{...},{...},]);

MarkersOnMap.Remarker([
  // At least one marker required
  {
    markerLat: 40.2155784,
    markerLong: 28.937106,
  },
  {
    markerLat: 39.9412639,
    markerLong: 32.8495664,
  },
]);
```

---------
---------
---------

#### Initialize (Advanced) + (All Default Options)

```js
// All options with descriptions
MarkersOnMap.Init({

  // required => Google Maps JavaScript API Key (in string format)
  googleApiKey: null, 

  // if "Google Maps Places API" enabled on "Google APIs Console" can set "true"
  googlePlacesApiEnabled: false, 

  // available if "googlePlacesApiEnabled" is true
  googlePlacesContentButton: 'Get Directions',

  // map width
  mapWidth: '100%', 

  // map height
  mapHeight: '450px',

  // map background color
  mapBackgroundColor: '#f8f8f8',

  // center of the world (lat)
  mapCenterLat: 39.925054,

  // center of the world (long)
  mapCenterLong: 32.8347552, 

  // map zoom level
  mapZoomLevel: 13, 

  // map min zoom level
  mapMinZoom: 2, 

  // map max zoom level
  mapMaxZoom: 18, 

  // map zoom control buttons
  mapZoomControl: false, 

  // map animated zoom
  mapAnimatedZoom: false, 

  // map type => "ROADMAP" || "SATELLITE" || "HYBRID" || "TERRAIN"
  mapTypeId: 'roadmap', 

  // map type control buttons 
  mapTypeControl: false, 

  // map street view control buttons
  mapStreetViewControl: false, 

  // map fullscreen control buttons
  mapFullscreenControl: true, 

  // map rotate control buttons
  mapRotateControl: false, 

  // map scale control buttons
  mapScaleControl: false, 

  // map clickable points of interest
  mapClickableIcons: true, 

  // map draggable
  mapDraggable: true, 

  // map mouse scroll zoom
  mapScrollWheel: true, 

  // map double click zoom
  mapDisableDoubleClickZoom: false, 

  // map styles => [object] => (snazzymaps or etc. services could be helpful)
  mapStyles: null, 

  // map default marker url
  markerDefaultUrl: momMarkerBase64(), // this function return default base64 icon 

  // map marker animation => "drop" || "bounce" || "null" for off
  markerDropAnimation: 'drop', 

  // adjust map zoom by markers
  markerAdjustZoom: true, 

  // custom markers img element wrapper
  markerOverlay: true, 

  // custom markers wrapper class name => e.g. ".mom-marker img { ...css codes };"
  markerOverlayClassName: 'mom-marker', 

  // map markers labels
  markerLabel: { 

    // map marker use label 
    useLabel: false, 

    // map marker label position => "top" || "bottom"
    labelPosition: 'top',

    // map marker label color
    labelColor: '#1e1e1e', 

    // map marker label font size
    labelFontSize: '12px', 

    // map marker label font weight
    labelFontWeight: '600', 

    // map marker label font family
    labelFontFamily: 'Roboto', 
  },

  // map markers options => at least one marker object required
  markerObjects: [ 
    {
      // required => marker latitude
      markerLat: 39.925018, 

      // required => marker longitude
      markerLong: 32.836956,  

      // optional => marker title
      markerTitle: 'Anitkabir', 

      // optional => marker size
      markerSize: 45, 

      // optional => marker url (an image url or base64 png/jpg)
      markerUrl: momMarkerBase64(), // this function return default base64 icon 

      // optional => if "markerLabel.usaLabel" is true
      markerLabelText: 'MOM', 

      // optional => custom html content infowindow when marker clicked
      markerContent: null, 

      // optional => infowindow from Google Places when marker clicked (if "googlePlacesApiEnabled" is true)
      markerContentFromGoogleQuery: 'Anitkabir', 

      // v1.1.0 and the next versions => optional => A callback function can be used when marker element clicked
      markerCallback: null,

      // v1.3.0 and the next versions => optional => A callback function can be used when marker infowindow close button element clicked
      closeCallback: null,
    }
  ],
});
```

---------
---------
---------

#### Copyright
Copyright © 2019 Markers On Map

#### License
MIT license - https://opensource.org/licenses/MIT