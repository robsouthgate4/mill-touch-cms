import React, { PropTypes } from 'react'
import logo from './logo.svg'
import './App.css'

const App = props => (
  <div className="App">
    <section className="App-body">
      {props.children}
    </section>
  </div>
)

App.propTypes = {
  children: PropTypes.node,
}

export default App
