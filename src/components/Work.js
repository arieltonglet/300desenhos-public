import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Draw from './Draw'

import './Work.css'

export class Work extends Component {
  state = {
    work: {},
  }

  componentDidMount() {
    const workId = this.props.match.params.workId
    const work = this.props.worksData.find((w) => w.id === workId)
    const draw = this.props.location.search === '?d' ? true : false

    this.setState({
      work: work,
      draw: draw,
    })
  }

  removeDraw = () => {
    this.setState({
      draw: false,
    })
  }

  render() {
    return (
      <>
        {this.state.draw === true ? (
          <Draw
            worksData={this.props.worksData}
            sortedWork={this.state.work}
            removeDraw={this.removeDraw}
          />
        ) : (
          ''
        )}
        <Header>
          <footer>
            <p className="work__kicker">{this.state.work.n}</p>
            <h2 className="work__text work__text--artist">
              {this.state.work.artista}
              <br />
            </h2>
            <p className="work__text">
              <span>{this.state.work.titulo}</span>
              <br />
              <span>{this.state.work.ano}</span>
              <br />
              <span>{this.state.work.tecnica}</span>
              <br />
              <span>{this.state.work.formato}</span>
            </p>
          </footer>
        </Header>
        <main className="app__main">
          <figure className="work__figure">
            <img
              alt={`${this.state.work.titulo} – ${this.state.work.artista}`}
              className="work__image"
              src={`https://300imagens.nyc3.cdn.digitaloceanspaces.com/1920/${this.state.work.imagem}.jpg`}
            ></img>
          </figure>
        </main>
      </>
    )
  }
}

Work.propTypes = {
  worksData: PropTypes.array.isRequired,
}

export default Work
