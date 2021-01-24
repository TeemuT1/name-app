import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const hello = () => {
  console.log('hello from src index.js')
}
hello()
ReactDOM.render(<App />, document.getElementById('root'))