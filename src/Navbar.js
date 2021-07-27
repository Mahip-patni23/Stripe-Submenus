import React from 'react'
import logo from './images/logo.svg'
import sublinks from './data'
import { FaArrowRight, FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'


const Navbar = () => {
    const {openModal, openSubmenu, closeSubmenu} = useGlobalContext();

    const displaySubmenu = (e) => {
      /* console.log(e.target.textContent); */
      const currentPage = e.target.textContent;
      const currentBtn = e.target.getBoundingClientRect();

      const center = (currentBtn.left+currentBtn.right)/2;
      const bottom = currentBtn.bottom ;
      openSubmenu(currentPage, {center, bottom});
    }

    const handleSubmenu = (e) => {
      if(!e.target.classList.contains('menu-btn'))
      {
        closeSubmenu()
      }  
    }

    return <React.Fragment>
      <nav className="navbar" onMouseOver={handleSubmenu}>
        <img src={logo} alt="logo" />
        <ul className="menus">
          {
            sublinks.map((links) => {
              const {page, id} = links;
              return <li key={id}><button className="menu-btn" onMouseOver={displaySubmenu}>{page}</button></li>
            })
          }
        </ul>
        <button className="btn sign-in-btn">sign in <FaArrowRight></FaArrowRight></button>
        <button className="toggle-btn" onClick={openModal}><FaBars></FaBars></button>
      </nav>
    </React.Fragment>
}

export default Navbar