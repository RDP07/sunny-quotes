import React from 'react'
import renderer from 'react-test-renderer'
import reducers from '../reducers'
import { PLUGINS } from 'constants/plugins'
import index from '../index'
import actions from '../actions'

const { activatePlugin } = index
const credentials = { username: '24011', password: 'TESTING123'}

describe('Client / Store / Plugins', function () {
  describe('Dispatch', function () {
    describe('Activate Plugin', function () {
      beforeEach(() => {
        this.dispatch = jest.fn()
        this.activatePlugin = (pluginName, credentials) => activatePlugin(pluginName, credentials)(this.dispatch, this.getState)
      })
      it('dispatches activatePlugin action', () => {
        window.fetchRequest= jest.fn().mockImplementation(() =>
          Promise.resolve(200))
        window.fetch = jest.fn().mockImplementation(() =>
          Promise.resolve((200))


        this.activatePlugin('afc', credentials)
        expect(this.activatePlugin).toMatchSnapshot()
      })
    })
  })
})

// describe('Client / Store / Plugins', function () {
//   describe('Dispatch', function () {
//     describe('Activate Plugin', function () { 
//       beforeEach(() => {
//       this.dispatch = jest.fn()
//       this.activatePlugin = (pluginName, credentials) => activatePlugin(pluginName, credentials)(this.dispatch, this.getState)
//       })
//     })
//     it('dispatches activatePlugin action', () => {
//       this.activatePlugin('afc', credentials)
//       expect(this.activatePlugin).toHaveBeenCalled()
//     })
//   })
//   describe('Deactivate Plugin', function () {
//     beforeEach(() => {
//       this.dispatch = jest.fn()
//       this.deactivatePlugin = (pluginName) => deactivatePlugin(pluginName)(this.dispatch)(this.getState)
//     })
//     it('dispatches deactivatePlugin action', () => {
//       this.deactivatePlugin('afc')
//       expect(this.activatePlugin).toMatchSnapshot()
//     })
//   })
// })



