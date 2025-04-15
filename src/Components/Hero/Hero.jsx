<<<<<<< HEAD
import React, { useState } from 'react';

import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div id='home' className='hero'>
            <img src={profile} alt="" />
            <h1>
                I'm Aysha Reeha E.V
            </h1>
            <p> A passionate developer and creative thinker driven by curiosity and the power of technology. I specialize in crafting elegant, user-centric web experiences — blending design and code to bring ideas to life.</p>
            <div className="hero-action">
                <div className='hero-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
    Connect With Me
</AnchorLink>
    
                </div>
                <div className='hero-resume'>Resume</div>

            </div>
        </div>
    )
}

=======
import React, { useState } from 'react';

import './Hero.css'
import profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    const [menu, setMenu] = useState("home");
    return (
        <div id='home' className='hero'>
            <img src={profile} alt="" />
            <h1>
                I'm Aysha Reeha E.V
            </h1>
            <p> A passionate developer and creative thinker driven by curiosity and the power of technology. I specialize in crafting elegant, user-centric web experiences — blending design and code to bring ideas to life.</p>
            <div className="hero-action">
                <div className='hero-connect'>
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
    Connect With Me
</AnchorLink>
    
                </div>
                <div className='hero-resume'>Resume</div>

            </div>
        </div>
    )
}

>>>>>>> fd4fc0243ba44a8f1697e5926a4b405ca6c510fb
export default Hero