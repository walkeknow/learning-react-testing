import data from '../../data/courses.json'

const numItems = data.length

describe('Number test', () => {
  test('Number of items = 12', () => {
    expect(numItems).toBe(12)
  })

  test('Number of items to be greater than or equal to 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12)
  })
})

describe('String test', () => {
  const dataTest = data[0].title

  test('There is js in this title', () => {
    expect(dataTest).toMatch(/JS/)
  })

  test('There is React in this title', () => {
    expect(dataTest).toContain('React')
  })
})

describe('Arrays & Objects', () => {
  const dataTwo = ['React Native', 'React']

  test('There list of courses contains React Native and React', () => {
    expect(dataTwo).toEqual(expect.arrayContaining(['React']))
  })

  test('The first course has a property called title', () => {
    expect(data[0]).toHaveProperty('title')
  })

  test('The first course has a property called title and value of 31,266', () => {
    expect(data[0]).toHaveProperty('views', '31,266')
  })
})
