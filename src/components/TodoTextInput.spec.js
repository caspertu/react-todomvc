import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import TodoTextInput from './TodoTextInput'

const setup = propOverrides => {
  const props = Object.assign({
    onSave: jest.fn(),
    text: 'Use Redux',
    placeholder: 'What needs to be done?',
    editing: false,
    newTodo: false
  }, propOverrides)

  const renderer = createRenderer()

  renderer.render(
    <TodoTextInput {...props} />
  )

  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('TodoTextInput', () => {
    it('should render correctly', () => {
      const { output } = setup()
      const { placeholder, value, className } = output.props
      expect(placeholder).toBe('What needs to be done?')
    })
  })
})