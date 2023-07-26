import React,{useEffect, useState} from 'react';
import './style.scss'



const logo = require('../img/logo.png')
const discord = require('../img/discord.png')
const telegram = require('../img/github.png')
const twitter = require('../img/twitter.png')


 
function Header() {
    const [back,setBack] = useState(false);
    const [click, setClick] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', (e:any) => {
            if (window.scrollY) {
                setBack(true)
            } else {
                setBack(false)
            }
        });
    },)
    
  return (
    <>
        <div style={!back? {background: 'none'} : {
            borderBottom: 'rgba(181, 0, 244, 0.7) 2px solid',
            borderImage: 'linear-gradient(to left, rgba(181, 0, 244, 0.6),rgba(0,0,0, 0))',
            borderImageSlice: 1
        }} className="header">
            <p><img src={logo} alt="logo" />Tools</p>
            <ul>
                <li>
                    <a href="">Product</a>
                    <div className='dropdown'>
                        <a href="https://app.hook.tools/contractKIT">
                            <img src={require('../img/kit.png')} alt="" />
                            <div>
                                <p>Contract KIT</p>
                                <p>Build your own contract easily</p>
                            </div>
                        </a>
                        <a href="https://app.hook.tools/uiKIT">
                            <img src={require('../img/sdk.png')} alt="" />
                            <div>
                                <p>UI KIT</p>
                                <p>Use our smart contracts</p>
                            </div>
                        </a>
                        <a href="https://app.hook.tools/dashboard">
                            <img src={require('../img/dashboard.png')} alt="" />
                            <div>
                                <p>Dashboard</p>
                                <p>Manage contract</p>
                            </div>
                        </a>
                        <a href="https://app.hook.tools/explorer">
                            <img src={require('../img/explorer.png')} alt="" />
                            <div>
                                <p>Explorer</p>
                                <p>Ready to deploy contract</p>
                            </div>
                        </a>
                        <a href="https://app.hook.tools/deploy">
                            <img src={require('../img/deploy.png')} alt="" />
                            <div>
                                <p>Deploy</p>
                                <p>Deploy in one click</p>
                            </div>
                        </a>
                    </div>    
                </li>
                <li>
                    <a href="">Recources</a>
                    <div className='dropdown'>
                        <a href="https://docs.hook.tools/">
                            <img src={require('../img/about.png')} alt="" />
                            <div>
                                <p>About</p>
                                <p>Learn more about our project</p>
                            </div>
                        </a>
                        <a href="https://docs.hook.tools/">
                            <img src={require('../img/wax.png')} alt="" />
                            <div>
                                <p>Guides</p>
                                <p>Learn how to build with Hook Tools</p>
                            </div>
                        </a>
                        <a href="https://docs.hook.tools/">
                            <img src={require('../img/docs.png')} alt="" />
                            <div>
                                <p>Docs</p>
                                <p>Complete Hook Tools documentation</p>
                            </div>
                        </a>
                    </div>   
                </li>
                <li><a href="https://docs.hook.tools/">Docs</a></li>
                <li className='links_head'>
                    <a href="https://discord.gg/WWPNtYJe5A"><img src={discord} alt="" /></a>
                    <a href="https://github.com/HookTools"><img src={telegram} alt="" /></a>
                    <a href="https://twitter.com/ToolsHook"><img src={twitter} alt="" /></a>
                </li>
            </ul>
        </div>
        <div style={!back? {background: 'none'} : {
            borderBottom: 'rgba(181, 0, 244, 0.7) 2px solid',
            borderImage: 'linear-gradient(to left, rgba(181, 0, 244, 0.6),rgba(0,0,0, 0))',
            borderImageSlice: 1
        }} className='header_mob'>
            <p><img src={logo} alt="logo" />Tools</p>
            <button style={click ? {display: 'none'} : {}} onClick={(() => setClick(true))} className='open_burger'>
                <p className='active'></p>
                <p></p>
                <p></p>
            </button>
        </div>
        <div style={click ? {right: 0} : {}} className='burger'>
            <button onClick={() => setClick(false)} className='close'>X</button>

            <a href="https://app.hook.tools/contractKIT">
                <img src={require('../img/kit.png')} alt="" />
                <p>Contract KIT</p>
            </a>
            <a href="https://app.hook.tools/uiKIT">
                <img src={require('../img/sdk.png')} alt="" />
                <p>UI KIT</p>
            </a>
            <a href="https://app.hook.tools/dashboard">
                <img src={require('../img/dashboard.png')} alt="" />
                <p>Dashboard</p>
            </a>
            <a href="https://app.hook.tools/explorer">
                <img src={require('../img/explorer.png')} alt="" />
                <p>Explorer</p>
            </a>
            <a href="https://app.hook.tools/deploy">
                <img src={require('../img/deploy.png')} alt="" />
                <p>Deploy</p>
            </a>
            <a href="https://docs.hook.tools/">
                <img src={require('../img/about.png')} alt="" />
                <p>About</p>
            </a>
            <a href="https://docs.hook.tools/">
                <img src={require('../img/wax.png')} alt="" />
                <p>Guides</p>
            </a>
            <a href="https://docs.hook.tools/">
                <img src={require('../img/docs.png')} alt="" />
                <p>Docs</p>
            </a>
        </div>
    </>
  );
}

export default Header;
