import React from 'react'
import ReactDOM from 'react-dom'
import Articles from './components/Articles'

class App extends React.Component {
  render() {
    return (
      <Articles />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)