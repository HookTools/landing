import React, { useEffect, useState } from 'react';
import './style.scss'
import Typed from 'react-typed';
import {useNavigate} from 'react-router-dom'
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import "prismjs/themes/prism-tomorrow.css";

const Prism = require("prismjs");
const PrismJsx = require('prismjs/components/prism-jsx.min');

const build_img = require('../img/build_img.png')
const vector = require('../img/vector.png')
const dev_tools = require('../img/dev_tools.png')
const logo = require('../img/logo.png')
const header_back = require('../img/header_back.png')
const footer_back = require('../img/footer_back.png')

function Main() { 
    let code = `import React from 'react';
    import { HookProvider } from 'hook-ui-kit';
    
    function App() {
      return (
        <HookProvider
                        network={'mainnet'}
                        colorMode={'dark'}
                        >
                                {/* Your application code */}
                </HookProvider>
    );
}`
    useEffect(() => {
        Prism.highlightAll();
      }, []);
    useEffect(() => {
        function onEntry(entry:any) {
            entry.forEach((change:any) => {
                if (change.isIntersecting) {
                change.target.classList.add('element-show');
                }
            });
        }
    
        let options = {
        threshold: [0.5] };
        let observer = new IntersectionObserver(onEntry, options);
        let elements:any = document.querySelectorAll('.element-animation');
    
        for (let elm of elements) {
          observer.observe(elm);
          console.log(1)
        }
    },[])
    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
  return (
    <>  
        <button className='up' onClick={topFunction}><img src={require('../img/arrow.png')} alt="" /></button>
        <img className='header_back' src={header_back} alt="" />

        <div className='head_div'>
            <div className='main_div element-animation'>
                <div>
                    <h1>The complete WAX application development framework.</h1>
                    <p className='head_p'>Experience the power of decentralized networks with ease, using our comprehensive suite of tools for connecting your apps and games.</p>
                </div>
                <img className='build_img' src={build_img} alt="build" />
            </div>
            <div className='head_buttons'>
                <button onClick={() => document.location='https://app.hook.tools'}><img width={30} src={require('../img/build_img_btn.png')} alt='' /> Start Building</button>
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


            <div className='result_div element-animation'>
                <div>
                    <h2>10k+</h2>
                    <p>Total Contracts Deployed</p>
                </div>
                <div>
                    <h2>10k+</h2>
                    <p>Total Transactions</p>
                </div>
                <div>
                    <h2>40+</h2>
                    <p>Owned smart contract</p>
                </div>
            </div>


            <h3 className='element-animation'>How it works</h3>
            <h2 className='element-animation'>Building for WAX application has never been easier.</h2>
            <p className='element-animation'>Empower your development with our suite of powerful tools and managed infrastructure services.</p>
            <img className='dev_tools_img element-animation' src={dev_tools} alt="dev_tools" />


            <h2 className='element-animation'>Graphic IDE</h2>
            <p className='element-animation'>Build dApps more easily and more efficiently with a powerful code editor catered to your EOSIO development process.</p>
            <img style={{margin: '0 auto', width:'80%'}} src={require('../img/IDE.png')} alt="" />
            <button className='ide_launch' onClick={() => document.location='https://dev.hook.tools'}><img width={30} src={require('../img/build_img_btn.png')} alt='' />Launch Web IDE</button>


            <h2 className='element-animation'>Our core values.</h2>
            <div className='core_value element-animation'>
                <p>Easily deploy basic contracts with just one click on our platform, even without prior programming knowledge - simplifying the process and empowering you to create on the blockchain with ease.</p>
                <p>Our platform offers audited contracts that you can easily customize and deploy on the WAX blockchain without any programming skills. Experience hassle-free contract deployment with our platform.</p>
                <p>Easily manage and monitor your contracts with our intuitive and user-friendly dashboard, providing you with full visibility and control over your actions on the blockchain.</p>
            </div>

            <h3 className='element-animation'>build</h3>
            <h2 className='element-animation'>Accelerate your app development.</h2>
            <p className='element-animation'>Empower your development with our user-friendly SDKs, robust developer tools, and seamless integrations with top-tier partner providers.</p>
            <div className='img_links_div'>
                <button className='links_div_1 element-animation'>
                    <img src={require('../img/div_1.png')} alt="" />
                </button>
                <button className='links_div_3 element-animation'>
                    <img src={require('../img/div_2.png')} alt="" />
                </button>
                <button className='links_div_4 element-animation'>
                    <img src={require('../img/div_3.png')} alt="" />
                </button>
            </div>

            <h3 className='element-animation'>UI KIT</h3>
            <h2 className='element-animation'>With the Hook Tools UI KIT, you can easily create user interfaces for your smart contracts and decentralized applications.</h2>
            <p className='element-animation'>Our <a style={{color: '#0d77c3'}} href='https://www.npmjs.com/package/hook-ui-kit'>UI KIT</a> comes with a range of pre-built components that you can use to customize the design of your application.</p>

            <div className='editor_code'>
                <button><img width={'50px'} src={require('../img/copy.png')}/></button>
                <pre>
                    <code className={`lang-${'jsx'}`}>{code}</code>
                </pre> 
            </div>

            <img className="vector_img element-animation" src={vector} alt="vector" />

            <img className='logo_main_page element-animation' src={logo} alt="logo" />
            <h2 className='element-animation'>Get started with Hook Tools</h2>
            <p className='element-animation'>Build WAX apps with ease.</p>
            <button onClick={() => document.location='https://app.hook.tools'} className='start_building'>Start Building</button>
        </div>
        <img className='footer_back' src={footer_back} alt="" />
    </>
  );
}

export default Main;
