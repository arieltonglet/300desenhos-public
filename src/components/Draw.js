import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import './Draw.css'

class Draw extends Component {
  state = {
    ctaDisplay: 'flex',
    counter: 0,
    maxCounter: 200,
    interval: 100,
    timer: null,
    numWorks: 74,
    imagesLoaded: [],
    sortedWorks: [],
    showModal: true,
  }

  componentDidMount() {
    const tempWorks = [...this.props.worksData].filter(
      (w) => w.id !== this.props.sortedWork.id
    )
    let stateWorks = [this.props.sortedWork]
    for (let i = 0; i < this.state.numWorks; i++) {
      const randomWork = tempWorks.splice(
        Math.floor(Math.random() * tempWorks.length),
        1
      )[0]
      stateWorks.push(randomWork)
    }
    //Embaralha obra sorteada
    stateWorks.sort(() => Math.random() * 2 - 1)
    this.setState({ sortedWorks: stateWorks })
  }

  startDraw() {
    const timer = setInterval(() => {
      if (this.state.counter >= this.state.maxCounter) {
        this.stopDraw()
      }
      const randomId = this.state.sortedWorks[
        Math.floor(Math.random() * this.state.sortedWorks.length)
      ].id

      this.setState({
        counter: this.state.counter + 1,
        flashWork: randomId,
      })
    }, this.state.interval)
    this.setState({ timer })
  }

  stopDraw() {
    clearInterval(this.state.timer)
    this.props.history.push(`/${this.props.sortedWork.id}`)
    this.setState({ showResult: true })
    setTimeout(() => {
      this.setState({ showModal: false })
      setTimeout(() => {
        this.props.removeDraw()
      }, 400)
    }, 2000)
  }

  imagesLoaded() {
    console.log('images loaded!')
  }

  render() {
    return (
      <div
        className={`draw__modal ${this.state.showModal === false ? 'off' : ''}`}
      >
        <div className="draw__grid">
          {this.state.sortedWorks.map((work, i) => {
            return (
              <figure
                className={`draw__grid-element ${
                  work.id === this.state.flashWork ? 'on' : ''
                }`}
                key={i}
              >
                <img
                  alt=""
                  src={`https://300imagens.nyc3.cdn.digitaloceanspaces.com/thumbs/150/${encodeURI(
                    work.imagem
                  )}.jpg`}
                  onLoad={() => {
                    this.setState({
                      imagesLoaded: [...this.state.imagesLoaded, '.'],
                    })
                  }}
                ></img>
              </figure>
            )
          })}
        </div>
        <div
          className="draw__cta"
          style={{ display: this.state.ctaDisplay }}
          onClick={() => {
            this.setState({ ctaDisplay: 'none' })
            this.startDraw()
          }}
        >
          <p>clique para começar</p>
        </div>
        <div
          className="draw__cta draw__cta--loading"
          style={{
            display:
              this.state.imagesLoaded.length < this.state.numWorks
                ? 'flex'
                : 'none',
          }}
        >
          <p>
            carregando
            <br />
            <small>{this.state.imagesLoaded.map(() => '.')}</small>
          </p>
        </div>
        <div
          className={`draw__cta draw__cta--result ${
            this.state.showResult === true ? 'show' : ''
          }`}
        >
          <p>esta é a sua obra</p>
        </div>
      </div>
    )
  }
}

Draw.propTypes = {
  sortedWork: PropTypes.object.isRequired,
  worksData: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  removeDraw: PropTypes.func.isRequired,
}

export default withRouter(Draw)
