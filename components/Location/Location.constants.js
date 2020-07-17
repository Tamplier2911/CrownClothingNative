export const locationMarker = (coords) => [
  {
    title: "Hey!",
    latlng: {
      latitude: coords.lat,
      longitude: coords.lon,
    },
    description: "You are here!",
    key: "userpositionfound",
  },
];
