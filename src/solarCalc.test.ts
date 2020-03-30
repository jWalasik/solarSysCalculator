import SolarSystem from './solarCalc'

//dates
const dates = {
  jd2000: '2000-01-01T00:00:00.000Z',
}

const solarSystem = new SolarSystem()

test('Should successfully initialize solar system instance', ()=>{
  expect(solarSystem).toMatchObject(expect.any(SolarSystem))
})

test('Should successfully compute planetary position for current time', ()=>{
  solarSystem.init()
  for(let key in solarSystem.bodies) {
    if (key === 'earth') return
    expect(solarSystem.bodies[key]).toHaveProperty('RA', )
    expect(solarSystem.bodies[key]).toHaveProperty('DEC')
  }
})

test('Should successfully compute planetary position for julian day 2000 00:00:00', ()=>{
  solarSystem.init(dates.jd2000)
  
})