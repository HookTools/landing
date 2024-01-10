import React, { useEffect, useState } from 'react'
import './style.scss'

const logo = require('../img/logo.png')
const discord = require('../img/discord.png')
const telegram = require('../img/github.png')
const twitter = require('../img/twitter.png')

function Header() {
  const [back, setBack] = useState(false)
  const [click, setClick] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', (e: any) => {
      if (window.scrollY) {
        setBack(true)
      } else {
        setBack(false)
      }
    })
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor: any) => {
    anchor.addEventListener('click', function (this: HTMLElement, e: Event) {
      e.preventDefault()

      try {
        const targetId: any = this?.getAttribute('href')?.split('+')[0]
        const offsetValue =
          parseInt(this.getAttribute('href')!.split('+')[1]) || 0

        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - offsetValue - 100
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          })
        }
      } catch (e) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    })
  })

  return (
    <>
      <div
        style={
          !back
            ? { background: 'none', backdropFilter: 'none' }
            : {
                borderBottom: 'rgba(181, 0, 244, 0.7) 2px solid',
                borderImage:
                  'linear-gradient(to left, rgba(181, 0, 244, 0.6),rgba(0,0,0, 0))',
                borderImageSlice: 1,
              }
        }
        className="header"
      >
        <p>
          <img src={logo} alt="logo" />
          Tools
        </p>
        <ul>
          <li>
            <a href="">Product</a>
            <div className="dropdown">
              <a href="https://dev.hook.tools">
                <img src={require('../img/dashboard.png')} alt="" />
                <div>
                  <p>Web IDE</p>
                  <p>Develop online</p>
                </div>
              </a>
              <a href="#localide">
                <img src={require('../img/explorer.png')} alt="" />
                <div>
                  <p>Local IDE</p>
                  <p>Download IDE</p>
                </div>
              </a>
              <a href="https://eosio-testify.hook.tools/">
                <img src={require('../img/deploy.png')} alt="" />
                <div>
                  <p>Eosio Testify</p>
                  <p>Test your smartcontract</p>
                </div>
              </a>
            </div>
          </li>

          <li>
            <a href="https://docs.hook.tools/">Docs</a>
          </li>
          <li className="links_head">
            <a href="https://github.com/HookTools">
              <img src={telegram} alt="" />
            </a>
            <a href="https://twitter.com/ToolsHook">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div
        style={
          !back
            ? { background: 'none' }
            : {
                borderBottom: 'rgba(181, 0, 244, 0.7) 2px solid',
                borderImage:
                  'linear-gradient(to left, rgba(181, 0, 244, 0.6),rgba(0,0,0, 0))',
                borderImageSlice: 1,
              }
        }
        className="header_mob"
      >
        <p>
          <img src={logo} alt="logo" />
          Tools
        </p>
        <button
          style={click ? { display: 'none' } : {}}
          onClick={() => setClick(true)}
          className="open_burger"
        >
          <p className="active"></p>
          <p></p>
          <p></p>
        </button>
      </div>
      <div style={click ? { right: 0 } : {}} className="burger">
        <button onClick={() => setClick(false)} className="close">
          X
        </button>

        <a href="#">
          <p>Home</p>
        </a>
        <a href="https://dev.hook.tools/">
          <p>Web IDE</p>
        </a>
        <a href="#localide">
          <p>Local IDE</p>
        </a>
        <a href="https://eosio-testify.hook.tools/">
          <p>Eosio-testify</p>
        </a>
        <a href="https://docs.hook.tools/">
          <p>Docs</p>
        </a>
        <div className="links">
          <a href="https://github.com/HookTools">
            <img src={telegram} alt="" />
          </a>
          <a href="https://twitter.com/ToolsHook">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
