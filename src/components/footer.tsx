import React from 'react';


const logo = require('../img/logo.png')
const discord = require('../img/discord.png')
const telegram = require('../img/telegram.png')
const twitter = require('../img/twitter.png')
function Footer() {
  return (
    <div className="footer">
        <p><img src={logo} alt="" />Tools</p>
        <div>
          <h3>Services</h3>
          <a href='https://app.hook.tools/contractKIT'>Contract KIT</a>
          <a href='https://app.hook.tools/uiKIT'>UI KIT</a>
          <a href='https://app.hook.tools/contracts'>Base contracts</a>
          <a href='https://app.hook.tools/dashboard'>Deploy</a>
        </div>
        <div>
          <h3>Help</h3>
          <a href='https://docs.hook.tools/'>Docs</a>
          <a href='https://github.com/HookTools'>Github</a>
        </div>
        <div>
          <h3>Socials</h3>
          <a href='https://twitter.com/ToolsHook'>Twitter</a>
          <a href='https://discord.com/invite/WWPNtYJe5A'>Discord</a>
        </div>
    </div>
  );
}

export default Footer;
