'use strict'

const Red = [
  'South Station',
  'Park Street',
  'Kendall',
  'Central',
  'Harvard',
  'Porter',
  'Davis',
  'Alewife'
]

// only count stops on the redline
const redLineStops = (start, end) => { 
  // find the array index of the start station
  const startIndex = Red.indexOf(start)
  // find the array index of the end station
  const endIndex = Red.indexOf(end)
  // do a little bit of math to find the difference (distance)
  return Math.abs(startIndex - endIndex)
}

// console.log(redLineStops('Park Street', 'Alewife')) // the amount of stops in between

// const myObj = {
//   one: 1,
//   two: 2
// }

// console.log(myObj.one) // dot notation to get a value at a key
// const examp = 'two'
// console.log(myObj[examp]) // bracket notation for variable value access in an object

const subwayLines = {
  Red: [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
  ],
  Green: [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
  ],
  Orange: [
    'North Station',
    'Haymarket',
    'Park Street',
    'State',
    'Downtown Crossing',
    'Chinatown',
    'Back Bay',
    'Forest Hills'
  ]
}

const test = 'Red'
// console.log(subwayLines[test])

// finds the difference between stops on the same line
const sameLineStops = (line, start, end) => { 
  // find the array index of the start station
  const startIndex = subwayLines[line].indexOf(start)
  // find the array index of the end station
  const endIndex = subwayLines[line].indexOf(end)
  // do a little bit of math to find the difference (distance)
  return Math.abs(startIndex - endIndex)
}

// console.log(sameLineStops('Green', 'Copley', 'Park Street'))
// console.log(sameLineStops('Red', 'Park Street', 'Alewife'))

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  // return early if there is only one line
  if (startLine === endLine) return sameLineStops(startLine, startStation, endStation)
  // find startline station to park street
  const startStationToParkStreet = sameLineStops(startLine, startStation, 'Park Street')
  // find endline station from park street
  const parkStreetToEndStation = sameLineStops(endLine, 'Park Street', endStation)
  // add them together
  return startStationToParkStreet + parkStreetToEndStation
}

module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
