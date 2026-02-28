import React from 'react'
import './Footer.css'
import Logo from "../../assets/falcon_logo.png"

const Footer = () => {
  return (
      <div className="Footer-container">
        <hr />
        <div className="footer">
            {/*<div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>*/}
        
            

            <div className="footer-info" style={{textAlign: 'center', marginTop: '2rem', color:"#303030"}}>
                <div className='logo-f'>
                <img src={Logo} alt="" />
            </div>
                
                <div style={{ fontSize: '0.85rem', color: '#303030'}}>
                    <p><strong>Phone Number 01:</strong> +91-8290062999</p>
                    <p><strong>Phone Number 02:</strong> +91-8619099879 </p>
                    <p><strong>Registered Office:</strong> 730, Silver Crown, Vardhman Group, Gandhi Path West, Jaipur 302021</p>                    
                </div>
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
  )
}

export default Footer
