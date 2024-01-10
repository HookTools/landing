import 'prismjs/themes/prism-tomorrow.css'
import React, { useEffect, useState } from 'react'
import Typed from 'react-typed'
import { Slider } from '../components/slider'
import './style.scss'

const Prism = require('prismjs')

const build_img = require('../img/build_img.png')
const vector = require('../img/vector.png')
const header_back = require('../img/header_back.png')
const Windows = require('../img/windows.svg')

function Main() {
  const [release, setRelease] = useState(null)
  useEffect(() => {
    fetch(
      'https://api.github.com/repos/HookTools/EOSIO-LOCAL-IDE/releases/latest'
    )
      .then((data) => data.json())
      .then((data) => setRelease(data.name.replace('v', '')))
  }, [])

  let cards = [
    {
      key: 1,
      content: <img src={require('../img/IDE.png')} />,
    },
    {
      key: 2,
      content: <img src={require('../img/IDE2.png')} />,
    },
    {
      key: 3,
      content: <img src={require('../img/IDE3.png')} />,
    },
    {
      key: 4,
      content: <img src={require('../img/IDE4.png')} />,
    },
    {
      key: 5,
      content: <img src={require('../img/IDE.png')} />,
    },
  ]
  const userOS = navigator.platform

  console.log('OS ' + userOS)

  useEffect(() => {
    Prism.highlightAll()
  }, [])
  useEffect(() => {
    function onEntry(entry: any) {
      entry.forEach((change: any) => {
        if (change.isIntersecting) {
          change.target.classList.add('element-show')
        }
      })
    }

    let options = {
      threshold: [0.5],
    }
    let observer = new IntersectionObserver(onEntry, options)
    let elements: any = document.querySelectorAll('.element-animation')

    for (let elm of elements) {
      observer.observe(elm)
      console.log(1)
    }
  }, [])
  function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [showButtons, setShowButtons] = useState(false)

  const [choose, setChoose] =
    useState<null | 'windows' | 'macOS' | 'linux'>(null)

  useEffect(() => {
    window.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      if (target.tagName.toLowerCase() !== 'button') {
        setChoose(null)
      }
    })
  }, [])
  return (
    <>
      <button className="up" onClick={topFunction}>
        <img src={require('../img/arrow.png')} alt="" />
      </button>
      <img className="header_back" src={header_back} alt="" />

      <div className="head_div">
        <div className="full-width">
          <div className="main_div element-animation">
            <div>
              <h1>The complete WAX application development framework.</h1>
              <p className="head_p">
                Experience the power of decentralized networks with ease, using
                our comprehensive suite of tools for connecting your apps and
                games.
              </p>
            </div>
            <img className="build_img" src={build_img} alt="build" />
          </div>
        </div>

        <div className="head_buttons">
          <button
            onClick={() => (document.location = 'https://dev.hook.tools')}
          >
            <img width={30} src={require('../img/build_img_btn.png')} alt="" />{' '}
            Start Building
          </button>
          <button>
            <Typed
              strings={['$ cleos -u deploy', '$ cleos -u build']}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </button>
        </div>

        <img className="vector_img" src={vector} alt="vector" />

        <h2 className="element-animation">Our Core values</h2>
        <div className="result_div">
          <p>Does not require private keys for development.</p>
          <p>Automatic testing of contracts after development.</p>
          <p>Autocomplete reserved words of EOSIO smart contracts.</p>
        </div>

        <h2
          id="localide"
          className="element-animation"
          style={{ marginTop: '100px' }}
        >
          Graphic IDE
        </h2>
        <p className="element-animation">
          Build dApps more easily and more efficiently with a powerful code
          editor catered to your EOSIO development process.
        </p>

        <Slider
          cards={cards}
          height="30vw"
          width="30vw"
          margin="0 auto"
          offset={5}
          showArrows={false}
        />
        <div className="downloads-buttons">
          <button
            className={choose === 'windows' ? 'downloads-buttons-active' : ''}
            onClick={() => setChoose('windows')}
          >
            <img src={Windows} alt="" />
            Windows
          </button>
          <button
            className={choose === 'linux' ? 'downloads-buttons-active' : ''}
            onClick={() => setChoose('linux')}
          >
            Linux
          </button>
          <button
            className={choose === 'macOS' ? 'downloads-buttons-active' : ''}
            onClick={() => setChoose('macOS')}
          >
            MacOS
          </button>
        </div>

        <button
          style={
            choose ? { borderColor: 'rgb(136, 112, 233)', opacity: 1 } : {}
          }
          className="donwload-btn"
          disabled={!choose}
          onClick={() => {
            switch (choose) {
              case 'linux':
                window.location.href = `https://github.com/HookTools/eosio-local-ide/releases/download/v${release}/hook-ide_${release}_amd64.deb`
                return
              case 'macOS':
                window.location.href = `https://github.com/HookTools/eosio-local-ide/releases/download/v${release}/eosio-ide-${release}-arm64.dmg`
                return
              case 'windows':
                window.location.href = `https://github.com/HookTools/eosio-local-ide/releases/download/v${release}/eosio-ide.Setup.${release}.exe`
                return
              default:
                return
            }
          }}
        >
          {choose ? 'Download' : 'Choose version'}{' '}
        </button>

        {/* <img
          className="logo_main_page element-animation"
          src={logo}
          alt="logo"
        /> */}
        {/* <h2 className="element-animation">Get started with Hook Tools</h2>
        <p className="element-animation">Build WAX apps with ease.</p>
        <button
          onClick={() => (document.location = 'https://dev.hook.tools')}
          className="start_building"
        >
          Start Building
        </button> */}
      </div>
    </>
  )
}

export default Main
