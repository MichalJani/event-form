import {
  ADD_EVENT
} from '../actions/types'
import { event } from './event'
import { testEvent, testInitialEvent } from '../utils/testUtils'

describe('Event Reducer', () => {
  it('Should return default state', () => {
    const newState = event(undefined, {})
    expect(newState).toEqual(testInitialEvent)
  })

  it('Should return new state if receiving type', () => {
    const expectedState = {
      event: testEvent,
      error: {}
    }
    const newState = event(undefined, {
      type: ADD_EVENT,
      payload: testEvent
    })
    expect(newState).toEqual(expectedState)
  })
})
