import isEmptyArray from '.'

describe('Helpers: isEmptyArray', () => {
  it('returns true when argument is an empty array', () => {
    expect(isEmptyArray([])).toBeTruthy()
  })

  it('returns false when argument is not empty', () => {
    expect(isEmptyArray([0])).toBeFalsy()
  })

  it('returns false when argument is not an array', () => {
    expect(isEmptyArray({})).toBeFalsy()
  })
})
