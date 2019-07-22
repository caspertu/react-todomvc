import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'
import App from './App'
import AddTodo from '../containers/AddTodo'
import MainSection from '../containers/MainSection'


const setup = propOverrides => {
  const renderer = createRenderer()
  renderer.render(<App />)
  const output = renderer.getRenderOutput()
  return output
}

describe('components', () => {
  describe('AddTodo', () => {
    it('should render', () => {
      const output = setup()
      const [ addTodo ] = output.props.children
      expect(addTodo.type).toBe(AddTodo)
    })
  })
  
  describe('MainSection', () => {
    it('should render', () => {
      const output = setup()
      const [ , mainSection ] = output.props.children
      expect(mainSection.type).toBe(MainSection)
    })
  })
})