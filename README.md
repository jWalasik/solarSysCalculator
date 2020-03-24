DEMO

# solarSysCalculator
Modest javascript library for calculation of planets in solar system

# Installation
npm install solar-sys-calculator

# Usage
const system = new SolarSystem()
system.init(date) :Integer(optional)
calculate planetary positions at specified date(miliseconds since Unix epoch), if date is ommited, current time will be used instead

## Planets
system.getPositions()
returns positions of all planets 

system.getPosition(name) :String
returns position of a specified planet

system.update(names, date) :[Array], String
updates positions for planets specified in array ex. ['mars', 'venus'] at given date (in ms), passing no arguments will compute positions for each planet using current time

# Sources
Orbital Elements -  Jet Propulsion Laboratory - 
Calculations Basis - Keith Burnett - http://www.stargazing.net/kepler/index.html
