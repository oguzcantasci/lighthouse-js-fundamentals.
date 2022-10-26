const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



function chooseStations(stations) {
  for (const station of stations) {
    const capacity = station[1]
    if (capacity >= 20) {
      const type = station[2]
      if (type === "school" || "community centre") {
        goodStations.push(station[0])
      }
    }
  }
  return goodStations
}

console.log(chooseStations(stations))