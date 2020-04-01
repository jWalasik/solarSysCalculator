import SolarSystem from './solarCalc'

const solarSystem = new SolarSystem()

test('Should successfully initialize solar system instance', ()=>{
  expect(solarSystem).toMatchObject(expect.any(SolarSystem))
})

test('Should successfully compute planetary position for current time', ()=>{
  solarSystem.compute()
  for(let key in solarSystem.bodies) {
    if (key !== 'earth'){
      expect(solarSystem.bodies[key]).toHaveProperty('RA')
      expect(solarSystem.bodies[key]).toHaveProperty('DEC')
    }    
  }
})

test('Should successfully compute planetary position for given time', ()=>{
  const jd2000 = new Date(946684800*1000)
  solarSystem.compute(jd2000)
  for(let key in solarSystem.bodies) {
    if (key !== 'earth'){
      expect(solarSystem.bodies[key]).toHaveProperty('RA')
      expect(solarSystem.bodies[key]).toHaveProperty('DEC')
    }    
  }
})

test('Should properly compute planetary position for julian day 2000 00:00:00', ()=>{
  const jd2000 = new Date(946684800*1000)
  solarSystem.compute(jd2000)
  for(let key in solarSystem.bodies) {
    if (key !== 'earth'){
      expect(solarSystem.bodies[key].RA).toEqual(bodies2000[key].RA)
      expect(solarSystem.bodies[key].DEC).toEqual(bodies2000[key].DEC)
    }    
  }
})

test('Should properly update planetary positions', ()=>{
  const oldDate = new Date(946684800*1000)
  const newDate = new Date()

  solarSystem.compute(oldDate)
  const old = {...solarSystem.bodies}
  

  solarSystem.compute(newDate)
  const current = {...solarSystem.bodies}

  expect(old.mars.RA).not.toBe(current.mars.RA)
  expect(old.venus.DEC).not.toBe(current.venus.DEC)
})


test('Should return geocentric coordinates of a planet', ()=>{
  solarSystem.compute(new Date(946684800*1000))
  const mars = solarSystem.geocentricCoords('mars')
  expect(mars).toMatchObject({
    name: 'mars',
    ra: 22.01033019672617,
    dec: -13.320495892197188
  })
})

test('Should return geocentric coordinates of all planets', ()=>{
  solarSystem.compute(new Date(946684800*1000))
  const planets = solarSystem.geocentricCoords()

  expect(planets).toHaveLength(8)
  expect.objectContaining({
    name: expect.any(String),
    ra: expect.any(Number),
    dec: expect.any(Number)
  })
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