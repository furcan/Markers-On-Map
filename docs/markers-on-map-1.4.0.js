/*!
* Markers On Map ('https://github.com/furcan/Markers-On-Map')
* Version: 1.4.0 
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2020 Markers On Map, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

/* global define */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory(root);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(root);
    } else {
        root.MarkersOnMap = factory(root);
    }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

    // eslint-disable-next-line
    'use strict';

    // SSR check on
    if (typeof window === 'undefined' && typeof window.document === 'undefined') {
        return;
    }
    // SSR check off

    // Markers On Map: Default Base64 Marker on
    var momMarkerBase64 = function (base64) {
        if (base64) {
            return base64;
        } else {
            return 'data:image/png;base64,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';
        }
    };
    // Markers On Map: Default Base64 Marker off

    // Markers On Map: Default Options on
    var momDefaultOptions = {
        googleApiKey: null, // required => Google Maps JavaScript API Key
        googlePlacesApiEnabled: false, // if "Google Maps Places API" enabled on "Google APIs Console" can set "true"
        googlePlacesContentButton: 'Get Directions', // available if "googlePlacesApiEnabled" is true
        mapWidth: '100%', // map width
        mapHeight: '450px', // map height
        mapBackgroundColor: '#f8f8f8', // map background color
        mapCenterLat: 39.925054, // center of the world (lat)
        mapCenterLong: 32.8347552, // center of the world (long)
        mapZoomLevel: 13, // map zoom level
        mapMinZoom: 2, // map min zoom level
        mapMaxZoom: 18, // map max zoom level
        mapZoomControl: false, // map zoom control buttons
        mapAnimatedZoom: false, // map animated zoom
        mapTypeId: 'roadmap', // map type => "ROADMAP" || "SATELLITE" || "HYBRID" || "TERRAIN"
        mapTypeControl: false, // map type control buttons 
        mapStreetViewControl: false, // map street view control buttons
        mapFullscreenControl: true, // map fullscreen control buttons
        mapRotateControl: false, // map rotate control buttons
        mapScaleControl: false, // map scale control buttons
        mapClickableIcons: true, // map clickable points of interest
        mapDraggable: true, // map draggable
        mapScrollWheel: true, // map mouse scroll zoom
        mapDisableDoubleClickZoom: false, // map double click zoom
        mapStyles: null, // map styles => [object]
        markerDefaultUrl: momMarkerBase64(), // map default marker url
        markerDropAnimation: 'drop', // map marker animation => "drop" || "bounce" || "null" for off
        markerAdjustZoom: true, // adjust map zoom by markers
        markerOverlay: true, // custom markers img element wrapper
        markerOverlayClassName: 'mom-marker', // custom markers wrapper class name => e.g. ".mom-marker img { ...css codes };"
        markerLabel: { // map markers labels
            useLabel: false, // map marker use label 
            labelPosition: 'top', // map marker label position => "top" || "bottom"
            labelColor: '#1e1e1e', // map marker label color
            labelFontSize: '12px', // map marker label font size
            labelFontWeight: '600', // map marker label font weight
            labelFontFamily: 'Roboto', // map marker label font family
        },
        markerObjects: [ // map markers options => at least one marker object required
            {
                markerLat: 39.925018, // required => marker latitude
                markerLong: 32.836956,  // required => marker longitude
                markerTitle: 'Anitkabir', // optional => marker title
                markerSize: 45, // optional => marker size
                markerUrl: momMarkerBase64(), // optional => marker url (an image url or base64 png/jpg)
                markerLabelText: 'MOM', // optional => if "markerLabel.usaLabel" is true
                markerContent: null, // optional => custom html content infowindow when marker clicked
                markerContentFromGoogleQuery: 'Anitkabir', // optional => infowindow from Google Places when marker clicked (if "googlePlacesApiEnabled" is true)
                markerCallback: null, // v1.1.0 and the next versions => optional => A callback function can be used when marker element clicked
                closeCallback: null, // v1.3.0 and the next versions => optional => A callback function can be used when marker infowindow close button element clicked
            }
        ],
    };
    var momGithubUrl = 'https://github.com/furcan/Markers-On-Map';
    var momGoogleMap = null;
    var momGoogleMapAdjustZoom;
    var momNewOptions;
    var momMarkersArray = [];
    // Markers On Map: Default Options off

    // Markers On Map: Console Error Function on
    var momConsoleError = function (errorMessage) {
        return console.error('%c Markers On Map (Error) ', 'padding:2px;border-radius:20px;color:#fff;background:#f44336', '\n' + errorMessage + '\n\n' + 'Visit to learn more: ' + momGithubUrl);
    };
    // Markers On Map: Console Error Function off

    // Markers On Map: Console Log Function on
    var momConsoleLog = function (infoMessage) {
        return console.log('%c Markers On Map (Info) ', 'padding:2px;border-radius:20px;color:#fff;background:#00bcd4', '\n' + infoMessage + '\n\n' + 'Visit to learn more: ' + momGithubUrl);
    };
    // Markers On Map: Console Log Function off

    // Markers On Map: Extend Options on
    var extendMarkersOnMap = function () {
        var extended = {};
        var deep = false;
        var i = 0;
        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }
        var merge = function (obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extendMarkersOnMap(extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };
        for (; i < arguments.length; i++) {
            merge(arguments[i]);
        }
        return extended;
    };
    // Markers On Map: Extend Options off

    // Markers On Map: Google Scripts on
    var momGoogleScripts = function (apiKey, placeApi) {
        // if there is no script element on
        if (!window.document.getElementById('MOMScript')) {
            // google maps dns prefetch on
            var dns = '<link id="MOMGoogleDNS" rel="dns-prefetch" href="//maps.googleapis.com">';
            var dnsRange = window.document.createRange();
            dnsRange.selectNode(window.document.head);
            var dnsFragment = dnsRange.createContextualFragment(dns);
            window.document.head.appendChild(dnsFragment);
            // google maps dns prefetch off

            // google maps script on
            var placesLibrary = '';
            if (placeApi) { // if place api enabled
                placesLibrary = '&libraries=places';
            }
            var script = '<script async defer id="MOMScript" src="https://maps.googleapis.com/maps/api/js?key=' + apiKey + placesLibrary + '"></script>';
            var scriptRange = window.document.createRange();
            scriptRange.selectNode(window.document.body);
            var scriptFragment = scriptRange.createContextualFragment(script);
            window.document.body.appendChild(scriptFragment);
            // google maps script off
        }
        // if there is no script element off
    };
    // Markers On Map: Google Scripts off

    // Markers On Map: Google Map Init on
    var momInitGoogleMap = function (element, callback) {
        // listen Google for initialize the map on
        var waitTimeout = 0;
        var mapInitInterval = setInterval(function () {
            // if waited Google Api more than 2 minutes on
            waitTimeout++;
            if (waitTimeout >= 1200) {
                // clear interval
                clearInterval(mapInitInterval);
                // remove loading
                window.document.getElementById('MomLoadingIndicator').innerHTML = '';
                // return information
                momConsoleLog('Can not connect to Google Maps services.');
                return false;
            }
            // if waited Google Api more than 2 minutes off

            // if Google Api is OK on
            if (typeof google === 'object' && typeof google.maps === 'object') {
                // map element
                var mapElement = window.document.querySelector(element);

                // map type on
                var mapTypeOption = momNewOptions.mapTypeId.toString().toLowerCase();
                var momMapType = google.maps.MapTypeId.ROADMAP;
                if (mapTypeOption === 'satellite') {
                    momMapType = google.maps.MapTypeId.SATELLITE;
                } else if (mapTypeOption === 'hybrid') {
                    momMapType = google.maps.MapTypeId.HYBRID;
                } else if (mapTypeOption === 'terrain') {
                    momMapType = google.maps.MapTypeId.TERRAIN;
                }
                // map type off

                // create google map
                momGoogleMap = new google.maps.Map(mapElement, {
                    backgroundColor: momNewOptions.mapBackgroundColor,
                    center: new google.maps.LatLng(momNewOptions.mapCenterLat, momNewOptions.mapCenterLong),
                    zoom: momNewOptions.mapZoomLevel,
                    minZoom: momNewOptions.mapMinZoom,
                    maxZoom: momNewOptions.mapMaxZoom,
                    zoomControl: momNewOptions.mapZoomControl,
                    animatedZoom: momNewOptions.mapAnimatedZoom,
                    mapTypeId: momMapType,
                    mapTypeControl: momNewOptions.mapTypeControl,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        mapTypeIds: ['roadmap', 'terrain', 'satellite', 'hybrid']
                    },
                    streetViewControl: momNewOptions.mapStreetViewControl,
                    fullscreenControl: momNewOptions.mapFullscreenControl,
                    rotateControl: momNewOptions.mapRotateControl,
                    scaleControl: momNewOptions.mapScaleControl,
                    clickableIcons: momNewOptions.mapClickableIcons,
                    scrollwheel: momNewOptions.mapScrollWheel,
                    draggable: momNewOptions.mapDraggable,
                    disableDoubleClickZoom: momNewOptions.mapDisableDoubleClickZoom,
                    styles: momNewOptions.mapStyles,
                });

                // adjust zoom for "fitBounds()"
                momGoogleMapAdjustZoom = new google.maps.LatLngBounds();

                // set markers
                momEachMarkerInitAndSet(momNewOptions.markerObjects);

                // clear interval
                clearInterval(mapInitInterval);

                // callback
                if (typeof callback === 'function') {
                    callback();
                }
            }
            // if Google Api is OK off
        }, 100);
        // listen Google for initialize the map off
    };
    // Markers On Map: Google Map Init off

    // Markers On Map: Each Marker Init and Set on
    var momEachMarkerInitAndSet = function (markerObjects) {
        // if there is one or more marker object in the initialize
        if (markerObjects && markerObjects.length > 0) {
            // each object
            for (var i = 0; i < markerObjects.length; i++) {
                // markers
                var markers = markerObjects[i];

                // markers lat long
                var markersLat = markers.markerLat; // required
                var markersLong = markers.markerLong; // required

                // if "markersLat" is not a number => return false on
                if (typeof markersLat !== 'number') {
                    momConsoleError('You have to set "markerObjects.markerLat" option and it must be a number. \n\n For Example: \n\n MarkersOnMap.Init({\n  markerObjects: [ \n    { \n      markerLat: 39.925018, \n    } \n  ], \n });');
                    //return false;
                }
                // if "markersLat" is not a number => return false off

                // if "markersLong" is not a number => return false on
                if (typeof markersLong !== 'number') {
                    momConsoleError('You have to set "markerObjects.markerLong" option and it must be a number. \n\n For Example: \n\n MarkersOnMap.Init({\n  markerObjects: [ \n    { \n      markerLong: 32.836956, \n    } \n  ], \n });');
                    //return false; 
                }
                // if "markersLong" is not a number => return false off

                // markers title on
                var markersTitle = markers.markerTitle;
                if (!markersTitle) { markersTitle = ' '; }
                // markers title off

                // markers size on
                var markersSize = markers.markerSize;
                if (!markersSize) { markersSize = 45; }
                // markers size off

                // markers url on
                var markersUrl = markers.markerUrl;
                if (!markersUrl) { markersUrl = momNewOptions.markerDefaultUrl; }
                // markers url off

                // markers label on
                var markersLabel = markers.markerLabelText;
                if (!markersLabel) { markersLabel = ' '; }
                // markers label off

                // markers animation
                var markersAnimation = momNewOptions.markerDropAnimation;

                // markers adjust zoom
                var markersAdjust = momNewOptions.markerAdjustZoom;

                // markers content
                var markersContent = markers.markerContent;

                // places api option
                var markersPlacesApi = momNewOptions.googlePlacesApiEnabled;

                // markers google query
                var markersQuery = markers.markerContentFromGoogleQuery;

                // markers google query button text 
                var markersButtonText = momNewOptions.googlePlacesContentButton;

                // markers callback function => v1.1.0 and next versions
                var markersCallback = markers.markerCallback;
                if (typeof markersCallback !== 'function') {
                    markersCallback = undefined;
                }

                // close callback function => v1.3.0 and next versions
                var closeCallback = markers.closeCallback;
                if (typeof closeCallback !== 'function') {
                    closeCallback = undefined;
                }

                // init and set markers
                momSingleMarkerInitAndSet(markersLat, markersLong, markersTitle, markersSize, markersUrl, markersLabel, markersAnimation, markersAdjust, markersContent, markersPlacesApi, markersQuery, markersButtonText, markersCallback, closeCallback);
            }
        }
        // else
        else {
            momConsoleError('There is/are no Marker Object/s in your initialize.');
        }
    };
    // Markers On Map: Each Marker Init and Set off

    // Markers On Map: Single Marker Init and Set on
    var momSingleMarkerInitAndSet = function (mLat, mLong, mTitle, mSize, mUrl, mLabel, mAnimation, mAdjust, mContent, mPlacesApi, mQuery, mButtonText, mCallback, cCallback) {
        // drop animation on
        var markerAnimation = null;
        if (mAnimation === 'drop') {
            markerAnimation = google.maps.Animation.DROP;
        } else if (mAnimation === 'bounce') {
            markerAnimation = google.maps.Animation.BOUNCE;
        }
        // drop animation off

        // marker icon settings on
        var mAnchor = parseInt(mSize / 2);
        var mLabelX = mAnchor;
        var mLabelY = parseInt(-(mLabelX / 2.5));
        if (momNewOptions.markerLabel.labelPosition === 'bottom') {
            mLabelY = parseInt(mSize + (mLabelX / 2));
        }
        var momIcon = {
            url: mUrl,
            size: new google.maps.Size(mSize, mSize),
            scaledSize: new google.maps.Size(mSize, mSize),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(mAnchor, mAnchor),
            labelOrigin: new google.maps.Point(mLabelX, mLabelY),
        };
        // marker icon settings off

        // marker label settings on
        var momLabel;
        if (momNewOptions.markerLabel.useLabel) {
            momLabel = {
                text: mLabel,
                color: momNewOptions.markerLabel.labelColor,
                fontSize: momNewOptions.markerLabel.labelFontSize,
                fontWeight: momNewOptions.markerLabel.labelFontWeight,
                fontFamily: momNewOptions.markerLabel.labelFontFamily,
            };
        }
        // marker label settings off

        // marker create on
        var momMarker = new google.maps.Marker({
            title: mTitle,
            label: momLabel,
            icon: momIcon,
            position: new google.maps.LatLng(mLat, mLong),
            map: momGoogleMap,
            animation: markerAnimation,
        });
        // marker create off

        // push marker to markers array on
        momMarkersArray.push(momMarker);
        // push marker to markers array off

        // zoom to map on
        momNewOptions.mapZoomLevel = momGoogleMap.getZoom();
        momGoogleMap.setZoom(momNewOptions.mapZoomLevel);
        // zoom to map on

        // if "markerAdjustZoom" is true => adjust map zoom by markers on
        if (mAdjust) {
            momGoogleMapAdjustZoom.extend(new google.maps.LatLng(mLat, mLong));
            momGoogleMap.fitBounds(momGoogleMapAdjustZoom);
        }
        // if "markerAdjustZoom" is true => adjust map zoom by markers off

        // marker overlay on
        if (momNewOptions.markerOverlay) {
            // create a wrap element with a class name to customize the rendered markers with CSS 
            // For Example: ".your-class-name img { ...css codes };"
            var markerOverlay = new google.maps.OverlayView();
            markerOverlay.draw = function () {
                this.getPanes().markerLayer.classList.add(momNewOptions.markerOverlayClassName);
            };
            markerOverlay.setMap(momGoogleMap);
        }
        // marker overlay off


        // if "mContent" has any content || ("mQuery" has a value && "mPlacesApi" is true) create an "InfoWindow" on
        var momInfoWindow;
        if (mContent || (mQuery && mPlacesApi)) {
            momInfoWindow = new google.maps.InfoWindow();
        }
        // if "mContent" has any content || ("mQuery" has a value && "mPlacesApi" is true) create an "InfoWindow" off

        // each close button click listener on
        var iwCloseButtonsClick = function (callback) {
            if (typeof callback === 'function') {
                google.maps.event.addListener(momInfoWindow, 'closeclick', function () {
                    callback();
                    google.maps.event.clearListeners(momInfoWindow, 'closeclick');
                });
            }
        };
        // each close button click listener off

        // get place details by lat long on
        var getPlaceDetailsByLatLong = function (markLat, markLong, markerQuery) {
            // show loading while google service results on
            momInfoWindow.setContent(momLoadingIndicator());
            momInfoWindow.open(momGoogleMap, momMarker);
            // show loading while google service results off

            // close button callback on
            iwCloseButtonsClick(cCallback);
            // close button callback off

            // google service callback on
            var googleServiceCallback = function (results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    if (typeof results === 'object' && typeof results[0] === 'object') {
                        // place
                        var place = results[0];

                        // content media on
                        var contentMedia;
                        var singleMediaSrc = momMarkerBase64();

                        // google place icon on
                        if (place.icon && place.icon.length > 0) {
                            singleMediaSrc = place.icon;
                        }
                        // google place icon off

                        // define single media on
                        var singleMedia = '<img class="mom-content-icon" width="100" height="100" src="' + singleMediaSrc + '" alt="MoM" />';
                        // define single media off

                        // google place photos on
                        var availableCount = 1; // 1 => Google Place API returns only one photo yet
                        if (place.photos && (place.photos.length >= availableCount ? availableCount : place.photos.length) > 0) {
                            // reset single media
                            singleMedia = '';

                            // create single media with photos
                            for (var i = 0; i < availableCount; i++) {
                                // img style on
                                var imgStyle = 'max-width:100px;width:100px;height:auto;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;';
                                if (place.photos[i].width >= place.photos[i].height) {
                                    var imgResizeWidth = Math.round((place.photos[i].width * 100) / place.photos[i].height);
                                    var imgPosLeft = Math.round((imgResizeWidth - 100) / 2);
                                    imgStyle = 'max-width:unset;width:' + imgResizeWidth + 'px;height:100px;position:absolute;left:-' + imgPosLeft + 'px;top:0;';
                                }
                                // img style off
                                singleMedia += '<div class="mom-content-photos" style="width:inherit;height:inherit;"><img class="mom-content-photo ' + (place.photos[i].width >= place.photos[i].height ? 'ver' : 'hor') + '" style="' + imgStyle + '" width="100" height="100" src="' + place.photos[i].getUrl().toString() + '" alt="MoM" /></div>';
                            }
                        }
                        // google place photos off

                        // total media
                        contentMedia = '<div class="mom-content-media" style="width:100px;height:100px;position:absolute;left:0;top:0;bottom:0;margin:auto;overflow:hidden;border-radius:5px;">' + singleMedia + '</div>';
                        // content media off

                        // content name on
                        var contentName;
                        if (place.name) {
                            contentName = '<div class="mom-content-name" style="float:left;width:100%;font-size:15px;line-height:18px;font-weight:500;margin:0 auto 8px;">' + place.name + '</div>';
                        }
                        // content name off

                        // content address on
                        var contentAddress;
                        if (place.formatted_address) {
                            contentAddress = '<div class="mom-content-address" style="float:left;width:100%;font-size:12px;line-height:14px;font-weight:400;margin:0 auto 8px;">' + place.formatted_address.toString().trim() + '</div>';
                        }
                        // content address off

                        // content get directions on
                        var contentButton;
                        if (place.formatted_address) {
                            var linkLat = place.geometry.location.lat();
                            var linkLong = place.geometry.location.lng();
                            var linkHref = 'https://www.google.com/maps/dir//' + linkLat + ',' + linkLong + '/@' + linkLat + ',' + linkLong + ',15z';
                            contentButton = '<div class="mom-content-button" style="float:left;width:100%;"><a class="mom-get-directions" style="font-size:13px;line-height:13px;font-weight:bold;padding:8px 12px;display:table;margin:auto;background:#00e676;text-decoration:none;color:#fff;border-radius:20px;cursor:pointer;text-shadow:0 0 2px rgba(0, 0, 0, 0.1),0 0 10px rgba(0, 0, 0, 0.3);" href="' + linkHref + '" target="_blank" rel="noopener">' + mButtonText.toString().trim() + '</a></div>';
                        }
                        // content get directions off

                        // total content on
                        var totalContent = '<div style="width:300px;min-height:100px;float:left;padding-left:100px;box-sizing:border-box;position:relative;" class="mom-marker-content">' +
                            contentMedia +
                            '<div class="mom-content-info" style="float:left;width:100%;padding:8px 12px;box-sizing:border-box;text-align:center;">' +
                            contentName +
                            contentAddress +
                            contentButton +
                            '</div>' +
                            '</div>';
                        // total content off

                        // set total content to infowindow on
                        var loadingTimeout = setTimeout(function () {
                            momInfoWindow.setContent(totalContent);
                            clearTimeout(loadingTimeout);
                        }, 400);
                        // set total content to infowindow off
                    }
                }
            };
            // google service callback off

            // define google service on
            var theLocation = { lat: markLat, lng: markLong }
            var request = {
                location: theLocation,
                radius: '1',
                query: markerQuery,
            };
            var service = new google.maps.places.PlacesService(momGoogleMap);
            service.textSearch(request, googleServiceCallback);
            // define google service off
        };
        // get place details by lat long off

        // marker each click listener on
        google.maps.event.addListener(momMarker, 'click', (function (momMarker) {
            return function () {
                // pan to marker on
                var latLong = new google.maps.LatLng(mLat, mLong);
                momGoogleMap.panTo(latLong);
                // pan to marker off

                // if "mContent" has any content override all details on
                if (mContent) {
                    // set custom marker content
                    momInfoWindow.setContent(mContent);

                    // open infowindow
                    momInfoWindow.open(momGoogleMap, momMarker);

                    // close button callback
                    iwCloseButtonsClick(cCallback);
                }
                // if "mContent" has any content override all details off

                // if "mContent" has no content && ("mPlacesApi" is true && "mQuery" has a value) on
                if (!mContent && (mQuery && mPlacesApi)) {
                    getPlaceDetailsByLatLong(mLat, mLong, mQuery); // get place details and show on infowindow
                }
                // if "mContent" has no content && ("mPlacesApi" is true && "mQuery" has a value) off

                // if "mCallback" on
                if (typeof mCallback === 'function') {
                    mCallback();
                }
                // if "mCallback" off
            };
        })(momMarker));
        // marker each click listener off
    };
    // Markers On Map: Single Marker Init and Set off

    // Markers On Map: Loading Indicator on
    var momLoadingIndicator = function (style, size, color) {
        if (!style) { style = ''; }
        if (!size) { size = 40; }
        if (!color) { color = '#1e1e1e'; }
        var indicator = '<div id="MomLoadingIndicator" style="width:' + size + 'px;height:' + size + 'px;' + style + '"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + size + '" height="' + size + '" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(25 50)"><circle cx="0" cy="0" r="9" fill="' + color + '" transform="scale(0.24 0.24)"><animateTransform attributeName="transform" type="scale" begin="-0.2666s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(50 50)"><circle cx="0" cy="0" r="9" fill="' + color + '" transform="scale(0.00153 0.00153)"><animateTransform attributeName="transform" type="scale" begin="-0.1333s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(75 50)"><circle cx="0" cy="0" r="9" fill="' + color + '" transform="scale(0.3 0.3)"><animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g></svg></div>';
        return indicator;
    };
    // Markers On Map: Loading Indicator off

    // Markers On Map: Main on
    var MarkersOnMap = {
        // init
        Init: function (momUserOptions) {
            momNewOptions = extendMarkersOnMap(true, momDefaultOptions, momUserOptions);
            // get api key and create scripts on
            var apiKey = momNewOptions.googleApiKey;
            if (!apiKey) { // if api key undefined return false
                momConsoleError('You have to set your "Google Maps Api Key" to the "googleApiKey" option. \n\n For Example: \n\n MarkersOnMap.Init({\n    googleApiKey:"YOUR_GOOGLE_MAPS_API_KEY", \n });');
                return false;
            }
            var placeApi = momNewOptions.googlePlacesApiEnabled;
            momGoogleScripts(apiKey, placeApi);
            // get api key and create scripts off
        },
        // remarker
        Remarker: function (newMarkerObjects) {
            // if "newMarkerObjects" undefined || less than 1 => return false on
            if (!newMarkerObjects.length || newMarkerObjects.length < 1) {
                momConsoleError('At least one Marker required.');
                return false;
            }
            // if "newMarkerObjects" undefined || less than 1 => return false off

            // if Google Map initialized
            if (momGoogleMap) {
                // if any of Marker exist on the map on
                if (momMarkersArray.length > 0) {
                    // remove old markers on
                    for (var i = 0; i < momMarkersArray.length; i++) {
                        momMarkersArray[i].setMap(null);
                    }
                    // remove old markers off

                    // clean old markers array
                    momMarkersArray = [];

                    // adjust zoom for "fitBounds()" again
                    momGoogleMapAdjustZoom = new google.maps.LatLngBounds();

                    // init and set new markers
                    momEachMarkerInitAndSet(newMarkerObjects);
                }
                // else if no Marker on the map when called "MarkersOnMap.Remarker"
                else {
                    momConsoleError('There is no Marker on the map. You have to initialize your map at least one Marker first.');
                    return false;
                }
            }
            // else Google Map not initialized yet
            else {
                momConsoleError('You have to initialize your map at least one Marker first to use "MarkersOnMap.Remarker()" function.');
                return false;
            }
        },
        // run
        Run: function (selector, callback) {
            // map element
            var mapElement = window.document.querySelector(selector);

            // if map element not exist on the document => return false
            if (!mapElement) {
                momConsoleError('You called the MarkersOnMap with "' + selector + '" selector, but there is no such element on the document.')
                return false;
            }

            // map element width and height
            mapElement.style.width = momNewOptions.mapWidth;
            mapElement.style.height = momNewOptions.mapHeight;
            mapElement.style.background = momNewOptions.mapBackgroundColor;
            mapElement.style.position = 'relative';

            // loading on
            var indicatorStyles = 'left:0;top:0;right:0;bottom:0;margin:auto;position:absolute;';
            mapElement.innerHTML = momLoadingIndicator(indicatorStyles, 60, '#c5c5c5');
            // loading off

            // init google maps
            momInitGoogleMap(selector, callback);
        },
    };
    return MarkersOnMap;
    // Markers On Map: Main off
});
