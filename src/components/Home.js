import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazy-load'

import ImageLoader from './ImageLoader'
import Header from './Header'

import './Home.css'

export class Home extends Component {
  render() {
    // console.log(images)
    return (
      <>
        <Header></Header>
        <main className="app__main">
          <div className="home__works-grid">
            {this.props.worksData.map((work, i) => {
              return (
                <Link
                  key={i}
                  to={`/${work.id}`}
                  className={`home__works-grid-element c${(work.n % 3) + 1}`}
                >
                  <LazyLoad offset={500}>
                    <figure>
                      <ImageLoader
                        alt={`${work.titulo} – ${work.artista}`}
                        src={`https://300imagens.nyc3.cdn.digitaloceanspaces.com/thumbs/300/${encodeURI(
                          work.imagem
                        )}.jpg`}
                      />
                    </figure>
                  </LazyLoad>
                  <div className="home__overlay">
                    <span>{work.n}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </main>
      </>
    )
  }
}

Home.propTypes = {
  worksData: PropTypes.array.isRequired,
}

export default Home
