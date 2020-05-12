import React, { Component } from 'react'
import Sticky from 'react-stickyfill'
import PropTypes from 'prop-types'

import Header from './Header'

import logosBar from '../assets/logos-bar.png'
import './Info.css'

export class Info extends Component {
  render() {
    return (
      <>
        <Header homeLinkGoBack={true}>
          <></>
        </Header>
        <main className="app__main app__main--info">
          <Sticky>
            <div className="info__logos">
              <img
                className="info__logos-image"
                src={logosBar}
                alt="Logos das organizações"
              />
            </div>
          </Sticky>
          <div className="info__main-text">
            <div className="info__main-text-content">
              <h2>300 desenhos</h2>
              <p>
                O projeto 300 desenhos reuniu um grupo voluntário de
                profissionais das artes visuais com o objetivo comum de levantar
                recursos para apoiar três importantes organizações
                filantrópicas: <strong>Apib, CUFA e Habitat Brasil</strong>.
                Atuantes em escala nacional, as três organizações estão neste
                momento desenvolvendo ações diretas de investimento social afim
                de reduzir o impacto socioeconômico da pandemia da COVID-19.{' '}
              </p>
              <p>
                Trezentos artistas, em diversos estágios de carreira e de
                diferentes países e estados do Brasil, foram convidados a doar
                trabalhos com a seguinte especificação: um desenho, inédito ou
                não, em formato A4. Cada artista interpretou a proposição à sua
                maneira, resultando em um fascinante grupo de trabalhos, que
                serão distribuídos entre os participantes da campanha de
                financiamento coletivo.
              </p>
              <p>
                Para doar por favor acesse o link ao lado que o redirecionará
                para a nossa página no Abaca$hi. Após concluir a sua
                contribuição você receberá um email automático do sistema
                Abaca$hi confirmando a efetivação de seu pagamento (atenção:
                esta confirmação pode levar até 72h. Caso não receba o email,
                pedimos que confiram sua caixa de spam). Após esta confirmação,
                você receberá o link para descobrir qual obra foi selecionada
                para você. Esta seleção é feita por um sistema automatizado que
                direcionará um desenho para cada cota de{' '}
                <strong>R$ 1000</strong> doada; podendo colaborar quantas vezes
                quiser.{' '}
              </p>
              <p>
                Respeitando as medidas de isolamento social, e zelando pela
                segurança de todos os envolvidos no processo de logística, os
                desenhos serão entregues no segundo semestre ou assim que as
                condições permitirem.{' '}
              </p>
              <p>
                Esperamos que, através de um envolvimento consistente da
                comunidade artística e interessados em arte em geral, possamos
                contribuir ativamente para melhorar as condições de vida de
                algumas das populações mais vulneráveis do Brasil durante este
                período crítico.{' '}
              </p>
              <p>
                Os organizadores do projeto, Amanda Rodrigues Alves, Alexandre
                Gabriel, Camilla Barella, Carolina Câmara, Efrain Almeida, Erika
                Verzutti, Fernanda Brenner, Magê Abatayguara, Mel Marcondes e
                Paula Signorelli agradecem o apoio generoso dos artistas, do
                Bloco Gráfico e de Ariel Tonglet, Arthur Fidalgo, Camila Tomé,
                Caio Mariano, Felipe Barsuglia, Index Conectada, Marcelo Campos,
                Rodolpho Parigi, Tiago Carneiro da Cunha e Wilson Lazaro.{' '}
              </p>

              <h3 className="info__subtitle">
                Sobre as organizações apoiadas:
              </h3>
              <p>
                A <strong>APIB</strong> (Articulação dos Povos Indígenas do
                Brasil) é uma instância de aglutinação e referência nacional do
                movimento indígena no Brasil, que nasceu com o propósito de
                promover e defender os direitos indígenas, a partir da
                articulação e união entre os povos e organizações indígenas das
                distintas regiões do país. Fazem parte da APIB as seguintes
                organizações indígenas regionais: Articulação dos Povos
                Indígenas do Nordeste, Minas Gerais e Espírito Santo (APOINME),
                Conselho do Povo Terena, Articulação dos Povos Indígenas do
                Sudeste (ARPINSUDESTE), Articulação dos Povos Indígenas do Sul
                (ARPINSUL), Grande Assembléia do povo Guarani (ATY GUASU),
                Coordenação das Organizações Indígenas da Amazônia Brasileira
                (COIAB) e Comissão Guarani Yvyrupa.
              </p>
              <p>
                Neste momento, os povos indígenas estão em situação de grande
                vulnerabilidade, com risco real do COVID-19 causar novo
                genocídio em suas comunidades. Ao mesmo tempo, dada a situação
                de calamidade nacional, estas comunidades estão também expostas
                ao aumento das invasões e crimes cometidos contra seus
                territórios e seus representantes.
              </p>
              <p>
                <strong>
                  Com o apoio do projeto 300 desenhos, a APIB pretende melhor
                  equipar suas bases operacionais com rádios profissionais de
                  longa distância, roteadores de internet, telefones e
                  computadores para dar suporte às ações de vigilância dos
                  territórios e acesso a informações de utilidade pública às
                  comunidades indígenas nacionais.
                </strong>
              </p>
              <p>
                Para saber mais, acesse{' '}
                <a
                  href="http://apib.info/apib/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://apib.info/apib/
                </a>
              </p>

              <p className="info__space-institution">
                <strong>Habitat Brasil</strong> para a Humanidade Brasil começou
                a atuar no país em 1992, e faz parte da rede global Habitat for
                Humanity, presente em mais de 70 países. Motivada pela visão de
                que toda pessoa merece um lugar digno para viver, Habitat já
                desenvolveu projetos sociais em 11 estados e apoiou mais de 87
                mil pessoas na construção ou melhoria de suas casas, assim como
                no acesso à água potável em regiões de seca.{' '}
              </p>
              <p>
                A organização atua em espaços democráticos para propor e incidir
                em políticas públicas de acesso à moradia. Além disso, promove
                capacitações para fortalecimento de mulheres, jovens, lideranças
                e comunidades e, através de ações de voluntariado e mobilização,
                busca envolver a sociedade na luta pelo direito à moradia
                adequada. Dessa forma, a Habitat Brasil apoia famílias para que
                elas alcancem a força, estabilidade e autossuficiência
                necessárias para construir um futuro melhor.{' '}
              </p>
              <p>
                <strong>
                  Com o apoio do projeto 300 desenhos, a Habitat pretende
                  atender 770 famílias de 23 comunidades com a entrega
                  emergencial de cestas básicas, kits de higiene e água.
                </strong>
              </p>
              <p>
                Para saber mais, acesse:{' '}
                <a
                  href="https://habitatbrasil.org.br"
                  rel="noopener noreferrer"
                >
                  https://habitatbrasil.org.br
                </a>{' '}
              </p>

              <p className="info__space-institution">
                A <strong>CUFA (Central Única das Favelas)</strong> é uma
                organização com mais de 20 anos de atuação social em favelas e
                periferias de todo o território brasileiro, sendo responsável
                pela criação e implementação de centenas de projetos culturais,
                artísticos, esportivos, educacionais e de responsabilidade
                social por todo o país.{' '}
              </p>
              <p>
                49% dos lares das favelas são chefiados por mulheres, sendo 47 %
                delas trabalhadoras autônomas ou atualmente desempregadas. O
                programa <strong>“Mães da Favela”</strong>, criado pela{' '}
                <strong>CUFA</strong>, tem o objetivo de levar renda para a
                maior quantidade possível de mães moradoras desses territórios,
                garantindo condições mínimas de higiene e alimentação para estas
                famílias.
              </p>

              <p>
                <strong>
                  Com o apoio do projeto 300 desenhos, o programa poderá
                  auxiliar mães solo moradoras de favelas de 17 estados e do
                  Distrito Federal, que estão sendo fortemente atingidas pelos
                  reflexos do Coronavírus (Covid-19). O programa social faz
                  parte do projeto “CUFA Contra o Vírus”.
                </strong>
              </p>
              <p>
                Para saber mais: acesse{' '}
                <a
                  href="https://www.maesdafavela.com.br"
                  rel="noopener noreferrer"
                >
                  www.maesdafavela.com.br
                </a>
              </p>
            </div>
          </div>
          <div className="info__artists">
            <h4 className="info__artists-title">Artistas participantes:</h4>
            <p>
              {[...this.props.worksData]
                .sort((a, b) => a.artista.localeCompare(b.artista))
                .map((w, i, arr) => {
                  const name =
                    w.artista === 'Fernando Davis / F. Davis'
                      ? 'Fernando Davis'
                      : w.artista
                  if (i === 0) {
                    return name
                  } else if (i < arr.length - 1) {
                    return `, ${name}`
                  } else {
                    return ` e ${name}`
                  }
                })}
            </p>
          </div>
        </main>
      </>
    )
  }
}

Info.propTypes = {
  worksData: PropTypes.array.isRequired,
}

export default Info
