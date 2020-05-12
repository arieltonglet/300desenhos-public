import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sticky from 'react-stickyfill'

import logo from '../assets/logo.svg'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <Sticky>
        <header className="header">
          <Link to="/">
            <h1>
              <img src={logo} alt="300 desenhos" />
            </h1>
          </Link>
          <nav className="header__nav">
            <a
              className="header__nav-item"
              href="https://abacashi.com/p/300desenhos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Doe agora
            </a>
            <Link className="header__nav-item" to="/info">
              +Info
            </Link>
          </nav>
          {this.props.children ? (
            this.props.children
          ) : (
            <footer className="d-none d-lg-block">
              <p className="header__about">
                O projeto 300 desenhos reuniu um grupo voluntário de
                profissionais das artes visuais com o objetivo comum de levantar
                recursos para três organizações filantrópicas atuantes em escala
                nacional (Apib, CUFA e Habitat Brasil) e que estão desenvolvendo
                ações diretas de investimento social durante a pandemia do
                COVID-19. Trezentos artistas, em diversos estágios de carreira,
                foram convidados a doar trabalhos em formato A4, que serão
                distribuídos entre os apoiadores do iniciativa. Ao contribuir
                com uma cota única de R$ 1000, você receberá o link para
                descobrir qual obra foi selecionada para você. Esta seleção é
                feita por um sistema automatizado que direcionará um desenho
                para cada cota doada; podendo colaborar quantas vezes quiser.
              </p>
            </footer>
          )}
        </header>
      </Sticky>
    )
  }
}

export default Header
