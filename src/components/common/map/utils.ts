import MapTypeStyle = google.maps.MapTypeStyle

export const getMapStyles = (): MapTypeStyle[] => {
  return [{ featureType: 'all', elementType: 'all', stylers: [{ saturation: -100 }, { gamma: 1.5 }] }]
}
