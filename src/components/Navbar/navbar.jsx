import nav from './navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import sc from './sc.gif'
import Logo from './scrolliumlogo.png'

function Navbar() {

  return (
    <nav className={nav.navbar}>
      <Link to ="/">
	  <br></br>
	  <div className="flex items-center">
  <img src={sc} alt="Description of Image" className='h-24 w-24 ml-24' />
  <span className='text-xl'>Scrollium: Zure</span>
</div>

      </Link>
      <div className={nav.menu}>
        <div className={nav.menu_item}>
          <Link to="/marketplace">Marketplace</Link>
        </div>
        <div className={nav.menu_item}>
        <Link to="/ranking">Rankings</Link>
        </div>
        <div className={nav.menu_item}>
          <Link to ="/connect-wallet">Connect a wallet</Link>
        </div>
        <button className='btn secondary filled'>
          <img src="../src/images/nav_login.svg" className={nav.btn_loginicon} />
          <Link to="/create-account">Sign Up</Link>
        </button>
      </div>
      <div className={nav.burguer}></div>
    </nav>
  );
}

export default Navbar;
