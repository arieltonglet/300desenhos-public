import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GA from './components/GoogleAnalytics'

import ScrollToTop from './components/ScrollToTop'

import Home from './components/Home'
import Info from './components/Info'
import Work from './components/Work'

import worksData from './data/works.json'

import Container from 'react-bootstrap/Container'

// import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  state = {
    sortedData: [],
  }

  componentDidMount() {
    //randomiza a coleção
    this.setState({
      sortedData: [...worksData].sort(() => Math.random() * 2 - 1),
    })
  }

  render() {
    return (
      <>
        <Router>
          {GA.init() && <GA.RouteTracker />}
          <Container className="app__container" fluid>
            <article className="app__article">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <>
                      <ScrollToTop />
                      <Home {...props} worksData={this.state.sortedData}></Home>
                    </>
                  )}
                ></Route>
                <Route
                  exact
                  path="/info"
                  render={(props) => (
                    <>
                      <ScrollToTop />{' '}
                      <Info {...props} worksData={worksData}></Info>
                    </>
                  )}
                ></Route>
                <Route
                  exact
                  path="/:workId"
                  render={(props) => (
                    <Work {...props} worksData={worksData}></Work>
                  )}
                ></Route>
              </Switch>
            </article>
          </Container>
        </Router>
      </>
    )
  }
}

export default App
