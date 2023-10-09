import { memo, useCallback, useRef } from 'react'

import { GoogleMap as GoogleMapLib, Marker, useJsApiLoader } from '@react-google-maps/api'

import { GOOGLE_MAPS_API_KEY } from '@/config'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { down } from '@/lib/utils/media-query'

import { CENTER_LARGE, CENTER_SMALL, LAT, LNG, ZOOM_LARGE, ZOOM_SMALL } from './consts'
import { getMapStyles } from './utils'

const pinColor = 'black'
const pinLabel = 'Vivents'

// Pick your pin (hole or no hole)
const pinSVGHole =
  'M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
const labelOriginHole = new google.maps.Point(12, 15)
const pinSVGFilled =
  'M 12,2 C 8.1340068,2 5,5.1340068 5,9 c 0,5.25 7,13 7,13 0,0 7,-7.75 7,-13 0,-3.8659932 -3.134007,-7 -7,-7 z'
const labelOriginFilled = new google.maps.Point(12, 9)

const markerImage = {
  // https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel
  path: pinSVGHole,
  anchor: new google.maps.Point(12, 17),
  fillOpacity: 1,
  fillColor: pinColor,
  strokeWeight: 2,
  strokeColor: 'white',
  scale: 2,
  labelOrigin: labelOriginFilled,
}
// const label = {
//   text: pinLabel,
//   color: 'white',
//   fontSize: '12px',
// } // https://developers.google.com/maps/documentation/javascript/reference/marker#Symbol

const Map = memo(({ onLoad: customOnLoad }: { onLoad?: (map: google.maps.Map) => void }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    preventGoogleFontsLoading: false,
  })

  const screenMdDown = useMediaQuery(down('md'))

  // const mapRef = useRef<GoogleMapLib>(null)
  // const markerRef = useRef<Marker>(null)

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      customOnLoad?.(map)
    },
    [customOnLoad]
  )

  return isLoaded ? (
    <GoogleMapLib
      // ref={mapRef}
      // mapContainerClassName='w-full h-[calc(100%+20px)]'
      mapContainerClassName='w-full h-full'
      center={screenMdDown ? CENTER_SMALL : CENTER_LARGE}
      zoom={screenMdDown ? ZOOM_SMALL : ZOOM_LARGE}
      onLoad={onLoad}
      // onCenterChanged={(e, v) => console.log(mapRef.current?.getCenter())}
      options={{
        minZoom: (screenMdDown ? ZOOM_SMALL : ZOOM_LARGE) - 3,
        maxZoom: (screenMdDown ? ZOOM_SMALL : ZOOM_LARGE) + 3,
        styles: getMapStyles(),
        disableDefaultUI: true,
        gestureHandling: screenMdDown ? 'none' : 'greedy',
        backgroundColor: '#FFFFFF',
        isFractionalZoomEnabled: true,
      }}
    >
      <Marker
        // ref={markerRef}
        position={{ lat: LAT, lng: LNG }}
        icon={markerImage}
      />
    </GoogleMapLib>
  ) : null
})

export default Map
