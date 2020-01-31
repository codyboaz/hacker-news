import React from 'react'
import ReactDOM from 'react-dom'
import Stories from './components/Stories'
import Nav from './components/Nav'
import User from './components/User'
import { ThemeProvider } from './contexts/theme'
import './styles.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }))
      }
    }
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <main className='container'>
              <Nav />
              <Switch>
                <Route exact path='/' render={() => (
                  <Stories type='top' />
                )} />
                <Route path='/new' render={() => (
                  <Stories type='new' />
                )} />
                <Route path='/user' component={User} />
                <Route render={() => 404} />
              </Switch>
            </main>
          </div>
        </ThemeProvider>
      </Router>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)