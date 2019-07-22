import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App';

const store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'

// class Counter extends React.Component {
//   render() {
//     const { value, onIncreaseClick } = this.props
//     return (
//       <div>
//         <span>{value}</span>
//         <button onClick={onIncreaseClick}>Increase</button>
//       </div>
//     )
//   }
// }

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncreaseClick: PropTypes.func.isRequired
// }

// const increaseAction = {
//   type: 'increase'
// }

// const counter = (state = {count: 0}, action) => {
//   const count = state.count
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 }
//     default:
//       return state
//   }
// }

// const store = createStore(counter)

// const mapStateToProps = (state) => ({
//   value: state.count
// })

// const mapDispatchToProps = (dispatch) => ({
//   onIncreaseClick: () => dispatch(increaseAction)
// })

// // 使用connect方法生成容器组件
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )