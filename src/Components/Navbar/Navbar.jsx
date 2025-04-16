
import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import underline from '../../assets/underline-png.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef=useRef();

    const openMenu=()=>{
        menuRef.current.style.right="0px";
    }
    const closeMenu=()=>{
        menuRef.current.style.right="-350px";
    }
    return (
        <div className='navbar'>
            <h2>portfolio</h2>
            <img src={menu_open}  onClick={openMenu} alt='' className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu}  alt='' className='nav-mob-close'/>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#home' onClick={() => setMenu("home")}>
                        <p className={menu === "home" ? "active" : ""}>Home</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#about' onClick={() => setMenu("about")}>
                        <p className={menu === "about" ? "active" : ""}>About Me</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#skills' onClick={() => setMenu("skills")}>
                        <p className={menu === "skills" ? "active" : ""}>Skill</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#project' onClick={() => setMenu("project")}>
                        <p className={menu === "project" ? "active" : ""}>Project</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu("contact")}>
                        <p className={menu === "contact" ? "active" : ""}>Contact</p>
                    </AnchorLink>
                </li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setMenu("contact")}>
                        <p className={menu === "contact" ? "active" : ""}></p>
                    Connect With Me</AnchorLink></div>
        </div>
    )
}
export default Navbar