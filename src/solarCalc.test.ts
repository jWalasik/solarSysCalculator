import SolarSystem from './solarCalc'

const solarSystem = new SolarSystem()

test('Should successfully initialize solar system instance', ()=>{
  expect(solarSystem).toMatchObject(expect.any(SolarSystem))
})

test('Should successfully compute planetary position for current time', ()=>{
  solarSystem.init()
  for(let key in solarSystem.bodies) {
    if (key !== 'earth'){
      expect(solarSystem.bodies[key]).toHaveProperty('RA')
      expect(solarSystem.bodies[key]).toHaveProperty('DEC')
    }    
  }
})

test('Should successfully compute planetary position for given time', ()=>{
  const jd2000 = new Date(946684800*1000)
  solarSystem.init(jd2000)
  for(let key in solarSystem.bodies) {
    if (key !== 'earth'){
      expect(solarSystem.bodies[key]).toHaveProperty('RA')
      expect(solarSystem.bodies[key]).toHaveProperty('DEC')
    }    
  }
})

test('Should properly compute planetary position for julian day 2000 00:00:00', ()=>{
  const jd2000 = new Date(946684800*1000)
  solarSystem.init(jd2000)
  for(let key in solarSystem.bodies) {
    if (key !== 'earth'){
      expect(solarSystem.bodies[key].RA).toEqual(bodies2000[key].RA)
      expect(solarSystem.bodies[key].DEC).toEqual(bodies2000[key].DEC)
    }    
  }
})

//mocks
const bodies2000: any = {
  'mercury': {
    RA: 18.08165778053603,
    DEC: -24.3796331547646
  },
  'venus': {
    RA: 15.952320460559868,
    DEC: -18.317830123610552
  },
  'earth': {
    name: 'earth',
  },
  'mars': {
    RA: 22.01033019672617,
    DEC: -13.320495892197188
  },
  'saturn': {
    RA: 2.573489827386895,
    DEC: 12.558596716313085
  },
  'uranus': {
    RA: 21.161887550920166,
    DEC: -17.0311158776342
  },
  'neptune': {
    RA: 20.360918523563498,
    DEC: -19.22048541113138
  },
  'pluto': {
    RA: 16.739765779694004,
    DEC: -11.281219316493228
  }
}