DEMO

# solarSysCalculator
Modest javascript library for calculation of planets in solar system

# Installation
```
npm install solar-sys-calculator
```

# Usage
```javascript
  const system = new SolarSystem()
  const exampleDate = new Date(946684800*1000)

  system.compute(exampleDate) :Date(optional)
```
Calculates planetary positions at specified date, if date is ommited, current time will be used instead

## Planetary positions
```javascript
  system.geocentricCoords()
```
Returns object containing geocentric positions of all solar system planets 

```javascript
  system.geocentricCoords(names) :Array
```
Returns geocentric position of a specified planet

# Sources
Orbital Elements -  Jet Propulsion Laboratory - https://ssd.jpl.nasa.gov/?planet_pos
Calculations Basis - Keith Burnett - http://www.stargazing.net/kepler/index.html
