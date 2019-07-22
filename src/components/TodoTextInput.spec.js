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
      expect(value).toBe('Use Redux')
      expect(className).toBe('')
    })

    it('should render correctly when editing=true', () => {
      const { output } = setup({ editing: true })
      expect(output.props.className).toEqual('edit')
    })

    it('should render correctly when isNewTodo=true', () => {
      const { output } = setup({ isNewTodo: true })
      expect(output.props.className).toEqual('new-todo')
    })

    it('should update value on change', () => {
      const { output, renderer } = setup()
      output.props.onChange({ target: { value: 'Use Radox' } })
      const updated = renderer.getRenderOutput()
      expect(updated.props.value).toEqual('Use Radox')
    })

    it('should call onSave on return key press', () => {
      const { output, props } = setup()
      output.props.onKeyDown({ which: 13, target: { value: 'Use Redux' } })
      expect(props.onSave).toBeCalledWith('Use Redux')
    })

    // it('should reset state on return key press if newTodo', () => {
    //   const { output, renderer } = setup({ newTodo: true })
    //   output.props.onKeyDown({ which: 13, target: { value: 'Use Redux' } })
    //   const updated = renderer.getRenderOutput()
    //   expect(updated.props.value).toEqual('')
    // })

    it('should call onSave on blur', () => {
      const { output, props } = setup()
      output.props.onBlur({ target: { value: 'Use Redux' } })
      expect(props.onSave).toBeCalledWith('Use Redux')
    })

    it('shouldnt call onSave on blur if newTodo', () => {
      const { output, props } = setup({ isNewTodo: true })
      output.props.onBlur({ target: { value: 'Use Redux' } })
      expect(props.onSave).not.toBeCalled()
    })
  })
})